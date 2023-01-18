import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/services/common-service/common.service';
import { ProductService } from 'src/app/services/product-service/product.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { LoaderService } from 'src/app/services/loader-service/loader.service';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { showIndicators: true } }
  ]
})
export class ProductDescriptionComponent implements OnInit {
  @Input() product; 
  modalRef?: BsModalRef;
  productImages: any;
  productImagesToBeEdited: any;
  className = 'product-description-modalcontainer'
  currentCurrency: string;
  constructor(
    private modalService: BsModalService,
    private productService: ProductService,
    private commonService: CommonService,
    private loaderService: LoaderService,
    private cartService: CartService
    
    ) { }

  ngOnInit(): void {
    this.setCurrentCurrency();
  }

  openProductDescriptionModal(templateRef:TemplateRef<any>): void{
    const config= this.commonService.getModalConfig(this.className);
    this.modalRef = this.modalService.show(templateRef, config);
    this.getProductImageToBeShown();
  }
  
  setCurrentCurrency() {
    this.currentCurrency = this.commonService.currentCurrency;
  }

  getProductImageToBeShown() {
    this.productImages= this.productService.getAllProductImagesToBeShown(this.product.productImages);
  }

  addToCart(product) {
    let data = product;
    this.addUserDetailsInCart(data);
    this.loaderService.display(true);
    this.cartService.addToCartList(data).subscribe(response=>{
      this.loaderService.display(false);
      console.log('product added to cart successfully');
      this.cartService.cartItemChange.next();
    })
  }

  addUserDetailsInCart(data) {
    let userDetails = this.commonService.userDetails;
    data.userId= userDetails._id;
    data.userName= userDetails.userName;
    data.userAddress = userDetails.address;
    data.userPhoneNumber = userDetails.phoneNumber
  }


  changeQty(product) {
    console.log('qty', product.quantity)
  }

}
