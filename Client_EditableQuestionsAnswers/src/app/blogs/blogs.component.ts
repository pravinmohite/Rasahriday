import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/services/common-service/common.service';
import { AddBlogsComponent } from './add-blogs/add-blogs.component';
import { ProductService } from 'src/app/services/product-service/product.service';
import { LoaderService } from 'src/app/services/loader-service/loader.service';
import { BlogService } from 'src/app/services/blog/blog.service';
import { BlogsByCategoryComponent } from './blogs-by-category/blogs-by-category.component'; 
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  @Input() cardData: any; // Replace with your actual card data type
  modalRef: BsModalRef;  @Output() modalClosed = new EventEmitter<void>();

  editMode = {
    status: false,
    editedItem: {}
  };
  blogs: any;
  isAdmin: boolean = false;
  categorySelectedObj = {

    isAllCategorySelected: true
  };
  editIconTag = 'svg';
  isCategoryOpen = false;
  isMobile = false;
  sideBarCloseStatus = 'close';
  deleteIconTag = 'path';
  isAllCategoryActive = true;
  activeIndex = -1;
  constructor(
    private commonService: CommonService,
    private modalService: BsModalService,
    private loaderService: LoaderService,
    private blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.getBlogs()
    this.setPrivileges();
  }

  setPrivileges() {
    this.isAdmin = this.commonService.userDetails.isAdmin;
  }
 
  getBlogs() {
    this.loaderService.display(true);
    this.blogService.getBlogsList().subscribe(data => {
      this.blogs = data;
      this.refreshProductAndSetCategoriesGlobally(data);
      this.loaderService.display(false);
    })
  }

  refreshProductAndSetCategoriesGlobally(data) {
    this.commonService.refreshProduct.next(this.categorySelectedObj)
    this.commonService.setCategoriesGlobally(data);
  }

  deleteProduct(id) {
    let result = this.commonService.confirmAction();
    if (result) {
      this.loaderService.display(true);
      alert("success, blog deleted successfully!")
      this.blogService.deleteBlogs(id).subscribe(data => {
        this.getBlogs();
        this.loaderService.display(false);
      })

    }
  }
  editProduct(id) {
    const editedItem = this.blogs.find(category => category._id === id);
    this.editMode = {
      status: true,
      editedItem: editedItem
    };
    this.openAddBlogsModal();
  }
  openAddBlogsModal(): void {
    const initialState = {
      editMode: this.editMode,  // Pass the editMode object to AddBlogsComponent
    };
    const config = this.commonService.getModalConfig();
    this.modalRef = this.modalService.show(AddBlogsComponent, { initialState });
  }
}
