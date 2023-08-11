import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/services/common-service/common.service';
import { LoaderService } from 'src/app/services/loader-service/loader.service';
import { ProductService } from 'src/app/services/product-service/product.service';
@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.scss']
})

export class AddBlogsComponent implements OnInit {

  blog: any = {
    blogName: ''
  }
  constructor(public modalRef: BsModalRef, 
    private http: HttpClient, 
    private productService: ProductService,
    private loaderService: LoaderService,
    private notifierService: NotifierService,
    private commonService: CommonService,


  ) { }

  urls = [];
  ngOnInit(): void {
  }
  onselectFile(e: any) {
    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (events: any) => {
          this.urls.push(events.target.result);
        }
      }
    }
  }



  // save(formVal): void {
  //   // if (this.editMode && this.editMode.status) {
  //   //   this.update(formVal);
  //   // }
  //   // else {
  //   //   this.save(formVal);
  //   // }
  // }

  save():void {
    this.loaderService.display(true);
    this.productService.addBlogs(this.blog).subscribe(data => {
      this.loaderService.display(false);
      this.notifierService.notify('success', 'Blog added successfully!');
    })
  }

  update(data) {
    this.loaderService.display(true);
    this.productService.addBlogs(data).subscribe(data => {
      this.loaderService.display(false);
      this.handleCategoryChangeEvent(data);
    })
  }
  handleCategoryChangeEvent(data) {
    this.modalRef?.hide();
    // this.commonService.refreshCategoryEvent(data);
  }
}
