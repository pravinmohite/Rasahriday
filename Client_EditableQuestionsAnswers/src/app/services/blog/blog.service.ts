import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoaderService } from './../../services/loader-service/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common-service/common.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  finalBlogsUrl: any;
  private data = new BehaviorSubject(null);
  confirmationText = "Are you sure you want to delete";


  constructor(
    private http: HttpClient,
    private loaderService: LoaderService,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router) {
    this.finalBlogsUrl = this.commonService.finalBlogsUrl;

  
 }

   /*----blogs---*/

   getBlogsList() {
    return this.http
    .get(this.finalBlogsUrl)
    .pipe(
      map((response: Array<any>) => {
        return response?.map((item) => {
          console.log(item);
          var div = document.createElement('div');
          div.innerHTML = item.content;
          var firstImage = div.getElementsByTagName('img')[0]
          item.image = firstImage ? firstImage.getAttribute("src") : "./../../assets/images/images/download.jfif";
          return item
        });
      }),
    )
  }

  addBlogs(data) {
    return this.http.post(this.finalBlogsUrl, data);
  }

  deleteBlogs(id) {
    return this.http.delete(this.finalBlogsUrl + "/" + id);
  }

  updateBlogs(blogId, data) {
    return this.http.patch(this.finalBlogsUrl + '/' + blogId, data);
  }

  getBlogDetail(blogId) {
    return this.http.get(this.finalBlogsUrl + '/' + blogId);
  }

  /*---end blogs---*/

}
