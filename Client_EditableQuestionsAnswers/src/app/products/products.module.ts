import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CategoryMenuComponent } from '../partial_views/category-menu/category-menu.component';
import { AddProductComponent } from './modals/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDescriptionComponent } from './modals/product-description/product-description.component';
import { AddCategoryComponent } from './modals/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SafeResourceUrlPipe } from './../pipes/safe-resource-url.pipe';
import { ConfirmOrderDetailsComponent } from './modals/confirm-order-details/confirm-order-details.component';


@NgModule({
  declarations: [
    ProductListComponent,
    CategoryMenuComponent,
    AddProductComponent,
    ProductDescriptionComponent,
    AddCategoryComponent,
    SafeResourceUrlPipe,
    ConfirmOrderDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    CarouselModule.forRoot()
  ]
})
export class ProductsModule { }
