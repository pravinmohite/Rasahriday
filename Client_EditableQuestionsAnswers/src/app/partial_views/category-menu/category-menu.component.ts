import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader-service/loader.service';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {
  products: any;
  categories: any;

  constructor(
    private loaderService: LoaderService,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.loaderService.display(true);
    this.productService.getCategoryList().subscribe(data=>{
       this.categories = data;
       this.loaderService.display(false);
    })
  }

}
