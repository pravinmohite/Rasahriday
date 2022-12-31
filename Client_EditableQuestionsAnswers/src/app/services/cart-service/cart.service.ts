import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoaderService } from '../loader-service/loader.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  filterData: any;
  currentQuestionTypeSelected: String;
  currentSearchString: String;
  cartUrl: string = "/api/cart";
  cartAllUrl = '/api/cartAll';
  isProd: boolean = false;
  /*---with ssl changed due to loadbalancer----can be done using nginx*/
  //prodUrl:String="https://www.ssl.frontendinterviewquestions.com";
  prodUrl: String = "http://54.255.150.70:3000";
  devDomain: any = this.isProd ? this.prodUrl : "http://localhost:3000";
  finalCartUrl: string = this.devDomain + this.cartUrl;
  finalCartAllUrl = this.devDomain + this.cartAllUrl;
  private data = new BehaviorSubject(null);
  currentData = this.data.asObservable();
  confirmationText = "Are you sure you want to delete";
  $urlSearchVal = new Subject();
  cartDataSearch = new Subject();
  cartItemChange = new Subject();
  constructor(
    private http: HttpClient,
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  /*-------------for question answers----------*/

  getCartListByUser(userId) {
    return this.http.get(this.finalCartUrl+'/'+userId);
  }

  getCartListAll() {
    return this.http.get(this.finalCartAllUrl);
  }

  addToCartList(data) {
    return this.http.post(this.finalCartUrl, data);
  }

  // addToCartListByUserId(userId, data) {
  //   this.finalCartByUserNameUrl = this.finalCartByUserNameUrl+'/'+userId;
  //   return this.http.post(this.finalCartByUserNameUrl, data);
  // }

  deleteCartItem(id) {
    return this.http.delete(this.finalCartUrl + "/" + id);
  }

  updateCartList(data) {
    return this.http.patch(this.cartUrl + '/' + data._id, data);
  }
}
