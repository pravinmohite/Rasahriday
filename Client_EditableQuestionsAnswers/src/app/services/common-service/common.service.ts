import { Injectable } from '@angular/core';
import { ModalOptions } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
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
