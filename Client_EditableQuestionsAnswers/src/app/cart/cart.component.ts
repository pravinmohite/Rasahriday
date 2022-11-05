import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItem: Record<string,unknown>;
  cartList: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService.getCartList().subscribe(data=>{
      this.cartList = data;
    }) 
  }

  getCartItemsByUserName() {
    this.cartService.getCartListByUserName('shubhamait123').subscribe(data=>{
      this.cartList = data;
    }) 
  }

}
