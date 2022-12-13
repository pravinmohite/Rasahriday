import { Component, OnInit } from '@angular/core';
import { CategoryMenuComponent } from 'src/app/partial_views/category-menu/category-menu.component';
import { CommonService } from 'src/app/services/common-service/common.service';
import { LoaderService } from 'src/app/services/loader-service/loader.service';
import { ProductService } from 'src/app/services/product-service/product.service';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';

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
  editMode = { 
    status: false, 
    editedItem: {} 
  };
  isAdmin = false;

  constructor(
    private loaderService: LoaderService,
    private productService: ProductService,
    private commonService: CommonService
    ) { }

  ngOnInit(): void {
    this.setPrivileges();
    this.handleSubscriptions();
  }

  setPrivileges() {
    this.isAdmin = this.commonService.userDetails.isAdmin;
  }

  handleSubscriptions() {
    this.commonService.refreshProduct.subscribe(data=>{
      this.setCategoryIdParamIfNotAvailable(data);
      this.getProducts(data['categoryId']);
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
       this.loaderService.display(false);
    })
  }

  deleteProduct(data) {
    let result=this.commonService.confirmAction();
    if(result) {
    this.loaderService.display(true);
    this.productService.deleteProduct(data._id).subscribe(response=>{
      this.getProducts(data['categoryId']);
      this.loaderService.display(false);
    })
   }
  }

  editProduct(item){
    let editedItem=JSON.parse(JSON.stringify(item));
    this.editMode={ 
      status: true,
      editedItem: editedItem
    };
  }

  addToCart() {
    
  }

  receiveProductAddEvent(data) {

  }

  receiveCategoryAddEvent() {
    
  }

}
