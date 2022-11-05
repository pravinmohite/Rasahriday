import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CategoryMenuComponent } from '../partial_views/category-menu/category-menu.component';
import { AddProductComponent } from './modals/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductListComponent,
    CategoryMenuComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
