import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';

import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDogsComponent } from './product-dogs/product-dogs.component';
import { RouterModule } from '@angular/router';
import {ProductRoutingModule} from './product.routing.module'


@NgModule({
  declarations: [ProductsComponent,  ProductImageComponent, ProductDogsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule
  ],
  exports:[ProductsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProductModule { }
