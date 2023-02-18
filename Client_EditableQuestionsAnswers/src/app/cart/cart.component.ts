import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmOrderDetailsComponent } from '../products/modals/confirm-order-details/confirm-order-details.component';
import { CartService } from '../services/cart-service/cart.service';
import { CommonService } from '../services/common-service/common.service';
import { OrderService } from '../services/order-service/order.service';
import { ProductService } from '../services/product-service/product.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { LoaderService } from '../services/loader-service/loader.service';
import { NotifierService } from 'angular-notifier';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { showIndicators: false } }
  ]
})
export class CartComponent implements OnInit {

  orderConfirmationClass='order-confirmation';
  cartItem: Record<string,unknown>;
  cartList: any;
  productImages: any[];
  userDetails: any;
  modalRef: BsModalRef;
  unfilteredCartItems: any;
  currentCurrency: string;
  faTrash= faTrash;
  constructor(
    private modalService: BsModalService,
    private commonService: CommonService,
    private orderService: OrderService,
    private productService: ProductService,
    private cartService: CartService,
    private loaderService: LoaderService,
    private notifierService: NotifierService
    ) { 
      this.userDetails = this.commonService.userDetails
    }

  ngOnInit(): void {
    this.setCurrentCurrency();
    this.getCartItemsByPrivileges();
    this.handleCartSearchSubscriptions();
  }

  setCurrentCurrency() {
    this.currentCurrency = this.commonService.currentCurrency;
  }

  handleCartSearchSubscriptions() {
    this.cartService.cartDataSearch.subscribe(data=>{
       this.cartList = this.commonService.filterDataBySearchString(this.unfilteredCartItems,data);
    })
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
      this.setCartData(data);
    }) 
  }

  setCartData(data) {
    this.cartList = data;
    this.setUnfilteredData(data);
    this.getProductImageToBeShown();
    this.setHeaderCartItemBadge(data.length);
  }

  setHeaderCartItemBadge(cartItemsLength) {
    this.cartService.cartItemChange.next(cartItemsLength);
  }

  setUnfilteredData(data) {
    this.unfilteredCartItems = data;
  }

  getCartItemsAll() {
    this.cartService.getCartListAll().subscribe(data=>{
      this.setCartData(data);
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

  // deleteCartItem(cartItem) {
  //   this.cartService.deleteCartItem(cartItem._id).subscribe(response=>{
  //      this.getCartItemsByPrivileges();
  //   })
  // }

  
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
      this.notifierService.notify('success', 'order placed successfully!');
      const placedOrder = true;
      this.deleteCartItem(cartItem, placedOrder);
    })
  }

  decrementQuantity(cartItem) {
    this.commonService.decrementQuantity(cartItem);
  }

  incrementQuantity(cartItem) {
    this.commonService.incrementQuantity(cartItem);
  }

  deleteCartItem(cartItem, placedOrder?) {
    let result=placedOrder || this.commonService.confirmAction();
      if(result) {
        this.loaderService.display(true);
        this.cartService.deleteCartItem(cartItem._id).subscribe(response =>{
          this.loaderService.display(false);
          if(!placedOrder) {
            this.notifierService.notify('success', 'cart Item deleted successfully!');
          }
          this.getCartItemsByPrivileges();
        });
    }
  }
}
