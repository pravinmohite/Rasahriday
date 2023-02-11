import { Component, OnInit } from '@angular/core';
import { CategoryMenuComponent } from 'src/app/partial_views/category-menu/category-menu.component';
import { CommonService } from 'src/app/services/common-service/common.service';
import { LoaderService } from 'src/app/services/loader-service/loader.service';
import { ProductService } from 'src/app/services/product-service/product.service';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any;
  categoryId;
  faTrash=faTrash;
  faEdit=faEdit;
  isAllCategorySelected = true;
  editMode = { 
    status: false, 
    editedItem: {} 
  };
  isAdmin = false;
  unfilteredProducts: any;
  currentCurrency: string;

  constructor(
    private loaderService: LoaderService,
    private productService: ProductService,
    private commonService: CommonService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.setPrivileges();
    this.handleSubscriptions();
    this.handleProductSearchSubsriptions();
    this.setCurrentCurrency();
  }

  setPrivileges() {
    this.isAdmin = this.commonService.userDetails.isAdmin;
  }

  setCurrentCurrency() {
    this.currentCurrency = this.commonService.currentCurrency;
  }

  handleSubscriptions() {
    this.commonService.refreshProduct.subscribe(data=>{
      if(data && data['isAllCategorySelected']) {
         this.isAllCategorySelected = true;
         this.getAllProducts();
      }
      else {
        this.isAllCategorySelected = false;
        this.setCategoryIdParamIfNotAvailable(data);
        this.getProducts(data['categoryId']);
      }
    })
  
  }

  handleProductSearchSubsriptions() {
    this.productService.productDataSearch.subscribe(data=>{
       this.products = this.commonService.filterDataBySearchString(this.unfilteredProducts,data);
    })
  }

  setCategoryIdParamIfNotAvailable(data) {
     if(!data.categoryId) {
        data.categoryId = data['_id'];
     }
  }

  getProducts(data?) {
    this.loaderService.display(true);
    this.productService.getProductListByCategoryId(data).subscribe(data=>{
       this.products = data;
       this.unfilteredProducts = data;
       this.loaderService.display(false);
    })
  }

  getAllProducts() {
    this.loaderService.display(true);
    this.productService.getAllProductList().subscribe(data=>{
      this.products = data;
      this.unfilteredProducts = data;
      this.loaderService.display(false);
    })
  }

  deleteProduct(data) {
    let result=this.commonService.confirmAction();
    if(result) {
    this.loaderService.display(true);
    this.productService.deleteProduct(data._id).subscribe(response=>{
      this.checkAndLoadProductsByCategory(data);
      this.loaderService.display(false);
    })
   }
  }

  checkAndLoadProductsByCategory(data) {
    if(this.isAllCategorySelected) {
      this.getAllProducts();
    }
    else {
      this.getProducts(data['categoryId']);
    }
  }

  editProduct(item){
    let editedItem=JSON.parse(JSON.stringify(item));
    this.editMode={ 
      status: true,
      editedItem: editedItem
    };
  }

  getProductImageToBeShown(productImage) {
    return this.productService.getProductImageToBeShown(productImage);
  }

  addUserDetailsInCart(data) {
    let userDetails = this.commonService.userDetails;
    data.userId= userDetails._id;
    data.userName= userDetails.userName;
    data.userAddress = userDetails.address;
    data.userPhoneNumber = userDetails.phoneNumber
  }

  addToCart(product) {
    let data = product;
    this.addUserDetailsInCart(data);
    this.loaderService.display(true);
    this.cartService.addToCartList(data).subscribe(response=>{
      this.loaderService.display(false);
      console.log('product added to cart successfully');
      this.cartService.cartItemChange.next();
    })
  }

  changeQty(product) {
    console.log('qty', product.quantity)
  }

  receiveProductAddEvent(data) {

  }

  receiveCategoryAddEvent() {
    
  }

}
