import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/services/common-service/common.service';
import { AddBlogsComponent } from '../add-blogs/add-blogs.component';
import { ProductService } from 'src/app/services/product-service/product.service';
import { LoaderService } from 'src/app/services/loader-service/loader.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss']
})
export class AllBlogsComponent implements OnInit {
  modalRef: BsModalRef;

  categories: any;
  categorySelectedObj = {
    isAllCategorySelected: true
  };
  isCategoryOpen = false;
  isMobile = false;
  sideBarCloseStatus = 'close'; 

  constructor(
    private commonService: CommonService,
    private modalService: BsModalService,
    private loaderService: LoaderService,
    private productService: ProductService,
    ) { }

  ngOnInit(): void {
    this.getCategories()
  }
  openAddBlogsModal(): void{
    // const initialState: any = {
    //   initialState: {
    //     product
    //   },
    //   class: this.orderConfirmationClass
    // };
    const config= this.commonService.getModalConfig();
    this.modalRef = this.modalService.show(AddBlogsComponent);
    // this.modalRef.content.event.subscribe(data=>{
    //   this.placeOrder(data);
    // });
  }

  getCategories() {
    // this.loaderService.display(true);
    this.productService.getBlogsList().subscribe(data=>{
       this.categories = data;
       console.log(data)
  
    })
  }
 

}
