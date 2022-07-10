import { Component, OnInit } from '@angular/core';
import { CategoryMenuComponent } from 'src/app/partial_views/category-menu/category-menu.component';
import { LoaderService } from 'src/app/services/loader-service/loader.service';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(
    private loaderService: LoaderService,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loaderService.display(true);
    this.productService.getProductList().subscribe(data=>{
       this.products = data;
       this.loaderService.display(false);
    })
  }

  addToCart() {
    
  }

}
