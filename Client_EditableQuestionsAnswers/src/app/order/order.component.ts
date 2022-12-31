import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service/cart.service';
import { CommonService } from '../services/common-service/common.service';
import { OrderService } from '../services/order-service/order.service';
import { ProductService } from '../services/product-service/product.service';
import { faCheckSquare, faClock, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { showIndicators: false } }
  ]
})
export class OrderComponent implements OnInit {
  productImages: any[];
  userDetails: any;
  orderList: any;
  faCheckSquare = faCheckSquare;
  faClock = faClock;
  faUserClock = faUserClock;
  unfilteredOrderedItems: any;
  constructor(
    private commonService: CommonService,
    private productService: ProductService,
    private orderService: OrderService
    ) { 
      this.userDetails = this.commonService.userDetails
    }

  ngOnInit(): void {
    this.getOrdersByUserPrivileges();
    this.handleOrderSearchSubsriptions();
  }

  handleOrderSearchSubsriptions() {
    this.orderService.orderDataSearch.subscribe(data=>{
       this.orderList = this.commonService.filterDataBySearchString(this.unfilteredOrderedItems,data);
    })
  }

  getOrdersByUserPrivileges() {
    if(this.userDetails.isAdmin) {
      this.getOrderedItemsAll();
    }
    else {
      this.getOrderedItemsByUser();
    }
  }

  getOrderedItemsByUser() {
    this.orderService.getOrderListByUser(this.userDetails['_id']).subscribe(data=>{
      this.setOrderedItems(data);
    }) 
  }

  getOrderedItemsAll() {
    this.orderService.getOrderListAll().subscribe(data=>{
      this.setOrderedItems(data);
    }) 
  }

  setOrderedItems(data) {
    this.orderList = data;
    this.unfilteredOrderedItems = data;
    this.getProductImageToBeShown();
  }

  getProductImageToBeShown() {
    for(const orderedItem of this.orderList) {
      orderedItem.productImagesToBeShown= this.productService.getAllProductImagesToBeShown(orderedItem.productImages);
    }
  }

  acceptOrder(orderedItem) {
    orderedItem.orderAccepted = true;
    this.orderService.updateOrderList(orderedItem).subscribe(response=>{
      this.getOrdersByUserPrivileges();
    });
  }

}
