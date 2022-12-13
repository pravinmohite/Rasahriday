import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common-service/common.service';
import { LoaderService } from 'src/app/services/loader-service/loader.service';
import { ProductService } from 'src/app/services/product-service/product.service';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {
  
  products: any;
  categories: any;
  faTrash=faTrash;
  faEdit=faEdit;
  editMode = { 
    status: false, 
    editedItem: {} 
  };
  activeIndex=0;
  isAdmin = false;

  constructor(
    private loaderService: LoaderService,
    private productService: ProductService,
    private commonService: CommonService
    ) { }

  ngOnInit(): void {
    this.setPrivileges();
    this.getCategories();
    this.handleSubscription();
  }

  setPrivileges() {
    this.isAdmin = this.commonService.userDetails.isAdmin;
  }

  handleSubscription() {
    this.commonService.refreshCategory.subscribe(data=>{
       this.getCategories();
    })
  }

  getCategories() {
    this.loaderService.display(true);
    this.productService.getCategoryList().subscribe(data=>{
       this.categories = data;
       this.refreshProductAndSetCategoriesGlobally(data);
       this.loaderService.display(false);
    })
  }

  refreshProductAndSetCategoriesGlobally(data) {
    this.commonService.refreshProduct.next(data[0])
    this.commonService.setCategoriesGlobally(data);
  }

  deleteCategory(id) {
    let result=this.commonService.confirmAction();
    if(result) {
    this.loaderService.display(true);
    this.productService.deleteCategory(id).subscribe(data=>{
      this.getCategories();
      this.loaderService.display(false);
    })
   }
  }

  editCategory(item){
    let editedItem=JSON.parse(JSON.stringify(item));
    this.editMode={ 
      status: true,
      editedItem: editedItem
    };
  }

  onCategorySelected(data,i) {
    this.setActiveIndex(i);
    this.commonService.refreshProduct.next(data)
  }

  setActiveIndex(index) {
    this.activeIndex = index;
  }

}
