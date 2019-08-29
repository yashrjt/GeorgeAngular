import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDogsComponent } from './product-dogs/product-dogs.component';


const routes: Routes = [
  {path:'',component:ProductsComponent,
  children:[
      {path:'catimage',component:ProductImageComponent},
      {path:'dogs',component:ProductDogsComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }