import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './product/products/products.component';
import { GiftcardsComponent } from './giftcard/giftcards/giftcards.component';
import { LoginComponent } from './login/login.component';
import { ProductImageComponent } from './product/product-image/product-image.component';
import { ProductDogsComponent } from './product/product-dogs/product-dogs.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:'catimage',component:ProductImageComponent},
    {path:'dogs',component:ProductDogsComponent},
  ]},
  {path:'gift-cards',component:GiftcardsComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
