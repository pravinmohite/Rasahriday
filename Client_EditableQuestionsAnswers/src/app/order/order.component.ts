import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service/cart.service';
import { CommonService } from '../services/common-service/common.service';
import { OrderService } from '../services/order-service/order.service';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  productImages: any[];
  userDetails: any;
  orderList: any;
  constructor(
    private commonService: CommonService,
    private productService: ProductService,
    private orderService: OrderService
    ) { 
      this.userDetails = this.commonService.userDetails
    }

  ngOnInit(): void {
    if(this.userDetails.isAdmin) {
      this.getOrderedItemsAll();
    }
    else {
      this.getOrderedItemsByUser();
    }
  }

  getOrderedItemsByUser() {
    this.orderService.getOrderListByUser(this.userDetails['_id']).subscribe(data=>{
      this.orderList = data;
      this.getProductImageToBeShown();
    }) 
  }

  getOrderedItemsAll() {
    this.orderService.getOrderListAll().subscribe(data=>{
      this.orderList = data;
      this.getProductImageToBeShown();
    }) 
  }

  getProductImageToBeShown() {
    for(const orderedItem of this.orderList) {
      orderedItem.productImages= this.productService.getAllProductImagesToBeShown(orderedItem.productImages);
    }
    
  }

}
