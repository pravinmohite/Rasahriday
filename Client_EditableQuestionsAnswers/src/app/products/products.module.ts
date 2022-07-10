import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CategoryMenuComponent } from '../partial_views/category-menu/category-menu.component';



@NgModule({
  declarations: [
    ProductListComponent,
    CategoryMenuComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
