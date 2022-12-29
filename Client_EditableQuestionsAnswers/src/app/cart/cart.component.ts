import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmOrderDetailsComponent } from '../products/modals/confirm-order-details/confirm-order-details.component';
import { CartService } from '../services/cart-service/cart.service';
import { CommonService } from '../services/common-service/common.service';
import { OrderService } from '../services/order-service/order.service';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  orderConfirmationClass='order-confirmation';
  cartItem: Record<string,unknown>;
  cartList: any;
  productImages: any[];
  userDetails: any;
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private commonService: CommonService,
    private orderService: OrderService,
    private productService: ProductService,
    private cartService: CartService
    ) { 
      this.userDetails = this.commonService.userDetails
    }

  ngOnInit(): void {
    this.getCartItemsByPrivileges();
  }

  getCartItemsByPrivileges() {
    if(this.userDetails.isAdmin) {
      this.getCartItemsAll();
    }
    else {
      this.getCartItemsByUser();
    }
  }

  getCartItemsByUser() {
    this.cartService.getCartListByUser(this.userDetails['_id']).subscribe(data=>{
      this.cartList = data;
      this.getProductImageToBeShown();
    }) 
  }

  getCartItemsAll() {
    this.cartService.getCartListAll().subscribe(data=>{
      this.cartList = data;
      this.getProductImageToBeShown();
    }) 
  }

  getProductImageToBeShown() {
    for(const cartItem of this.cartList) {
      cartItem.productImagesToBeShown= this.productService.getAllProductImagesToBeShown(cartItem.productImages);
    }
  }

  confirmOrder(cartItem) {
    this.openOrderConfirmationModal(cartItem);
  }

  deleteCartItem(cartItem) {
    this.cartService.deleteCartItem(cartItem._id).subscribe(response=>{
       this.getCartItemsByPrivileges();
    })
  }

  
  openOrderConfirmationModal(cartItem): void{
    const initialState: ModalOptions = {
      initialState: {
        product: cartItem
      }
    };
    const config= this.commonService.getModalConfig(this.orderConfirmationClass);
    this.modalRef = this.modalService.show(ConfirmOrderDetailsComponent, initialState);
    this.modalRef.content.event.subscribe(data=>{
      this.placeOrder(data);
    });
  }

  placeOrder(cartItem) {
    this.orderService.addToOrderList(cartItem).subscribe(response=>{
      console.log('Order placed successfully');
      this.deleteCartItem(cartItem);
    })
  }
}
