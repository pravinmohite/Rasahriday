import { Component, Input, OnInit } from '@angular/core';
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
  @Input() cardData: any; // Replace with your actual card data type
  modalRef: BsModalRef;
  editMode = {
    status: false,
    editedItem: {}
  };
  categories: any;
  categorySelectedObj = {

    isAllCategorySelected: true
  };
  editIconTag = 'svg';
  isCategoryOpen = false;
  isMobile = false;
  sideBarCloseStatus = 'close';
  deleteIconTag = 'path';
  isAllCategoryActive = true;
  activeIndex=-1;
  constructor(
    private commonService: CommonService,
    private modalService: BsModalService,
    private loaderService: LoaderService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getBlogs()

  }
  openAddBlogsModal(): void {
    // const initialState: any = {
    //   initialState: {
    //     product
    //   },
    //   class: this.orderConfirmationClass
    // };
    const config = this.commonService.getModalConfig();
    this.modalRef = this.modalService.show(AddBlogsComponent);
    // this.modalRef.content.event.subscribe(data=>{
    //   this.placeOrder(data);
    // });
  }

  getBlogs() {
    // this.loaderService.display(true);
    this.productService.getBlogsList().subscribe(data => {
      this.categories = data;
      console.log(data)

    })
  }

  refreshProductAndSetCategoriesGlobally(data) {
    this.commonService.refreshProduct.next(this.categorySelectedObj)
    this.commonService.setCategoriesGlobally(data);
  }

  deleteProduct(id: any) {
    let result = this.commonService.confirmAction();
    if (result) {
      this.loaderService.display(true);
      this.getBlogs()
      alert("Your Blog is deleted successfully")
      this.productService.deleteBlogs(id).subscribe(data => {

        this.loaderService.display(false);
      })
    }
  }

  editBlog(item) {
    let editedItem = JSON.parse(JSON.stringify(item));
    this.editMode = {
      status: true,
      editedItem: editedItem
    };
  }
  onCategorySelected(event, data, i) {
    const currentTagName = event.target.tagName;
    if (currentTagName !== this.editIconTag && currentTagName !== this.deleteIconTag) {
      this.setActiveIndex(i);
      this.isAllCategoryActive = false;
      this.commonService.refreshProduct.next(data);
      this.commonService.sideBarStatus.next(this.sideBarCloseStatus);
    }
  }

  allCategorySelected() {
    this.setActiveIndex(-1);
    this.isAllCategoryActive = true;
    this.commonService.refreshProduct.next(this.categorySelectedObj);
    this.commonService.sideBarStatus.next(this.sideBarCloseStatus);
  }

  setActiveIndex(index) {
    this.activeIndex = index;
  }

  toggleCustomAccordion() {
    if (this.isCategoryOpen) {
      this.isCategoryOpen = false;
    }
    else {
      this.isCategoryOpen = true;
    }
  }

}
