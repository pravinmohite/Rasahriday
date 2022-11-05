import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from './../../services/loader-service/loader.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  filterData: any;
  currentQuestionTypeSelected: String;
  currentSearchString: String;
  loginDetailsUrl: String = "/api/loginDetails";
  productUrl: string = "/api/product";
  categoryUrl: string = "/api/category";
  isProd: boolean = false;
  /*---with ssl changed due to loadbalancer----can be done using nginx*/
  //prodUrl:String="https://www.ssl.frontendinterviewquestions.com";
  prodUrl: String = "http://54.255.150.70:3000";
  devDomain: any = this.isProd ? this.prodUrl : "http://localhost:3000";
  finalloginDetailsUrl: string = this.devDomain + this.loginDetailsUrl;
  finalProductUrl: string = this.devDomain + this.productUrl;
  finalCategoryUrl: string = this.devDomain + this.categoryUrl;
  questionAnswerData: any;
  private data = new BehaviorSubject(null);
  currentData = this.data.asObservable();
  confirmationText = "Are you sure you want to delete";
  $urlSearchVal = new Subject();
  constructor(
    private http: HttpClient,
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  /*---------------for login details-------------*/
  getloginDetails() {
    return this.http.get(this.finalloginDetailsUrl);
  }

  validateLoginDetails(data) {
    return this.http.post(this.finalloginDetailsUrl, data);
  }

  addloginDetails(data) {
    return this.http.post(this.finalloginDetailsUrl, data);
  }

  setUrlSearchVal(urlSearchVal): void {
    this.$urlSearchVal.next(urlSearchVal);
  }

  getUrlSearchVal(): Observable<any> {
    return this.$urlSearchVal;
  }

  deleteloginDetails(id) {
    return this.http.delete(this.finalloginDetailsUrl + "/" + id);
  }

  updateloginDetails(data) {
    return this.http.patch(this.finalloginDetailsUrl + "/" + data._id, data);
  }

  /*-------------for question answers----------*/

  getProductList() {
    // return this.http.get(this.finalProductUrl).subscribe(response => {
    //   this.data.next(response);
    //   this.questionAnswerData = response;
    // })
    return this.http.get(this.finalProductUrl);
  }

  addProduct(data) {
    this.loaderService.display(true);
    this.http.post(this.finalProductUrl, data).subscribe(response => {
      this.getProductList();
    })
  }

  deleteProduct(id) {
    this.loaderService.display(true);
    this.http.delete(this.finalProductUrl + "/" + id).subscribe(response => {
      this.getProductList();
    })
  }

  updateProduct(data) {
    this.loaderService.display(true);
    this.http.patch(this.finalProductUrl + '/' + data._id, data).subscribe(response => {
      this.getProductList();
    })
  }

  /*----categories---*/
  getCategoryList() {
    // return this.http.get(this.finalProductUrl).subscribe(response => {
    //   this.data.next(response);
    //   this.questionAnswerData = response;
    // })
    return this.http.get(this.finalCategoryUrl);
  }

  addCategory(data) {
    this.loaderService.display(true);
    this.http.post(this.finalCategoryUrl, data).subscribe(response => {
      this.getCategoryList();
    })
  }

  deleteCategory(id) {
    this.loaderService.display(true);
    this.http.delete(this.finalCategoryUrl + "/" + id).subscribe(response => {
      this.getCategoryList();
    })
  }

  updateCategory(data) {
    this.loaderService.display(true);
    this.http.patch(this.finalCategoryUrl + '/' + data._id, data).subscribe(response => {
      this.getCategoryList();
    })
  }
  /*---end categories---*/

  filterDataByQuestionType(type) {
    this.currentQuestionTypeSelected = type;
    this.handleFilteringOfDataBySearchStringAndQuestionType();
  }

  handleFilteringOfDataBySearchStringAndQuestionType() {
    if ((!this.currentQuestionTypeSelected || this.currentQuestionTypeSelected.toUpperCase() == "ALL") && (this.currentSearchString == undefined || this.currentSearchString.trim() == "")) {
      this.data.next(this.questionAnswerData);
    }
    else if (!this.currentQuestionTypeSelected || this.currentQuestionTypeSelected.toUpperCase() == "ALL" && (this.currentSearchString && this.currentSearchString.trim() != "")) {
      this.filterData = {};
      this.filterData = this.questionAnswerData.filter((item, index) => {
        return item.question.toUpperCase().indexOf(this.currentSearchString.toUpperCase()) > -1;
      })
      this.data.next(this.filterData);
    }
    else if (this.currentQuestionTypeSelected.toUpperCase() != "ALL" && (this.currentSearchString && this.currentSearchString.trim() != "")) {
      this.filterDataByQuestionTypeAndSearchString();
    }
    else {
      this.filterData = {}
      this.filterData = this.questionAnswerData.filter((item, index) => {
        return item.questionType.toUpperCase() == this.currentQuestionTypeSelected.toUpperCase();
      })
      this.data.next(this.filterData);
    }
  }

  filterDataBySearchString(value) {
    let urlParam = this.route.snapshot.paramMap.get('searchKey');
    if (urlParam !== value) {
      this.router.navigate(['/frontend-interview-questions', value], { relativeTo: this.route });
    }
    this.currentSearchString = value;
    this.handleFilteringOfDataBySearchStringAndQuestionType();
  }

  filterDataByQuestionTypeAndSearchString() {
    this.filterData = {}
    this.filterData = this.questionAnswerData.filter((item, index) => {
      return ((item.question.toUpperCase().indexOf(this.currentSearchString.toUpperCase()) > -1) && (item.questionType.toUpperCase() == this.currentQuestionTypeSelected.toUpperCase()));
    })
    this.data.next(this.filterData);
  }

  confirmAction() {
    let result = confirm(this.confirmationText);
    return result;
  }
}
