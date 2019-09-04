import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';

import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDogsComponent } from './product-dogs/product-dogs.component';
import {ProductDogsListComponent} from './product-dogs-list/product-dogs-list.component';
import { RouterModule } from '@angular/router';
import {ProductRoutingModule} from './product.routing.module';
import { DogPipe } from './pipes/dog.pipe';


@NgModule({
  declarations: [ProductsComponent,  ProductImageComponent, ProductDogsComponent, ProductDogsListComponent,DogPipe],
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule
  ],
  exports:[ProductsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProductModule { }
