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
  cartByUserNameUrl = '/api/cartByUserName';
  isProd: boolean = false;
  /*---with ssl changed due to loadbalancer----can be done using nginx*/
  //prodUrl:String="https://www.ssl.frontendinterviewquestions.com";
  prodUrl: String = "http://54.255.150.70:3000";
  devDomain: any = this.isProd ? this.prodUrl : "http://localhost:3000";
  finalCartUrl: string = this.devDomain + this.cartUrl;
  finalCartByUserNameUrl = this.devDomain + this.cartByUserNameUrl;
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

  /*-------------for question answers----------*/

  getCartList() {
    return this.http.get(this.finalCartUrl);
  }

  getCartListByUserName(userName) {
    this.finalCartByUserNameUrl = this.finalCartByUserNameUrl+'/'+userName;
    return this.http.get(this.finalCartByUserNameUrl);
  }

  addToCartList(data) {
    this.loaderService.display(true);
    this.http.post(this.finalCartUrl, data).subscribe(response => {
      this.getCartList();
    })
  }

  addToCartListByUserName(userName, data) {
    this.loaderService.display(true);
    this.finalCartByUserNameUrl = this.finalCartByUserNameUrl+'/'+userName;
    this.http.post(this.finalCartByUserNameUrl, data).subscribe(response => {
      this.getCartList();
    })
  }

  deleteCartItem(id) {
    this.loaderService.display(true);
    this.http.delete(this.finalCartUrl + "/" + id).subscribe(response => {
      this.getCartList();
    })
  }

  updateCartList(data) {
    this.loaderService.display(true);
    this.http.patch(this.cartUrl + '/' + data._id, data).subscribe(response => {
      this.getCartList();
    })
  }
}
