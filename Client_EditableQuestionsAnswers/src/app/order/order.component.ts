import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service/cart.service';
import { CommonService } from '../services/common-service/common.service';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  cartItem: Record<string,unknown>;
  cartList: any;
  productImages: any[];
  userDetails: any;
  constructor(
    private commonService: CommonService,
    private productService: ProductService,
    private cartService: CartService
    ) { 
      this.userDetails = this.commonService.userDetails
    }

  ngOnInit(): void {
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
      cartItem.productImages= this.productService.getAllProductImagesToBeShown(cartItem.productImages);
    }
    
  }

}
