import { Injectable } from '@angular/core';
import { ModalOptions } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loginDetailsUrl: String = "/api/loginDetails";
  signUpUrl = "/api/signUp";
  productUrl: string = "/api/product";
  categoryUrl: string = "/api/category";
  orderUrl = "/api/order";
  isProd: boolean = false;
  /*---with ssl changed due to loadbalancer----can be done using nginx*/
  //prodUrl:String="https://www.ssl.frontendinterviewquestions.com";
  prodUrl: String = "http://54.255.150.70:3000";
  devDomain: any = this.isProd ? this.prodUrl : "http://localhost:3000";
  finalloginDetailsUrl: string = this.devDomain + this.loginDetailsUrl;
  finalSignUpUrl = this.devDomain + this.signUpUrl;
  finalProductUrl: string = this.devDomain + this.productUrl;
  finalCategoryUrl: string = this.devDomain + this.categoryUrl;
  finalOrderUrl = this.devDomain + this.orderUrl;
  userDetails: any;
  confirmationText = "Are you sure you want to delete";
  refreshCategory = new Subject();
  refreshProduct = new Subject();
  userLoggedIn = new Subject();
  categoryMenus;
  modalClass = 'modal-dialog-container'

  constructor() { }

  setUserDetails(userDetails) {
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    this.userDetails =userDetails;
    this.userLoggedInEvent(userDetails);
  }

  getUserDetails() {
    let retrievedDetails = localStorage.getItem('userDetails');
    if(retrievedDetails) {
      this.userDetails = JSON.parse(retrievedDetails);
    }
  }

  userLoggedInEvent(userDetails) {
    this.userLoggedIn.next(userDetails);
  }

  removeUserDetails() {
    localStorage.removeItem('userDetails');
    localStorage.removeItem('loggedIn');
  }

  refreshCategoryEvent(data) {
    this.refreshCategory.next(data);
  }

  refreshProductEvent(data) {
    this.refreshProduct.next(data);
  }

  confirmAction() {
    let result = confirm(this.confirmationText);
    return result;
  }

  getModalConfig(className?) {
    const config: ModalOptions = {
      backdrop: 'static',
      keyboard: false,
      animated: true,
      ignoreBackdropClick: true,
      class: className?className:this.modalClass
    };
    return config;
  }

  setCategoriesGlobally(data) {
    this.categoryMenus = data;
  }

  getCategories() {
    return this.categoryMenus;
  }
}
