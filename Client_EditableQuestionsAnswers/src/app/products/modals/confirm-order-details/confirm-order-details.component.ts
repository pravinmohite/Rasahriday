import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { faEdit,faCheckSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-confirm-order-details',
  templateUrl: './confirm-order-details.component.html',
  styleUrls: ['./confirm-order-details.component.scss']
})
export class ConfirmOrderDetailsComponent implements OnInit {
  public event: EventEmitter<any> = new EventEmitter();
  @Input() product;
  productImages: any;
  faEdit = faEdit;
  faCheckSquare = faCheckSquare;
  editedProduct: any;
  productImagesToBeEdited: any;
  editMode = false;
  constructor(public modalRef: BsModalRef) {
  }

  ngOnInit(): void {
    console.log('test');
  }
  setEditMode(value) {
    this.editMode = value;
    if(value) {
      this.setDetailsToBeEdited();
    }
    else {
      this.saveEditedDetails();
    }
  }

  setDetailsToBeEdited() {
    this.editedProduct ={
      userAddress: this.product.userAddress,
      userPhoneNumber: this.product.userPhoneNumber
    }
  }
  saveEditedDetails() {
    this.product.userAddress = this.editedProduct.userAddress;
    this.product.userPhoneNumber = this.editedProduct.userPhoneNumber;
  }

  save() {
    this.modalRef.hide();
    this.event.emit(this.product);
  }
}
