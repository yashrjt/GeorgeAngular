import { Component, OnInit, Input,Output } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-dogs-list',
  templateUrl: './product-dogs-list.component.html',
  styleUrls: ['./product-dogs-list.component.css']
})
export class ProductDogsListComponent implements OnInit {

  constructor() { }

  @Input('dogList') list;
  @Output() clickDogs=new EventEmitter();
  ngOnChanges(){
   // console.log('got dog list')
  }

  ngOnInit() {
   // console.log(this.list);
    //console.log('init method')
  }

  productDogslist(item){
  console.log("TCL: ProductDogsListComponent -> clickDog -> item", item)
  this.clickDogs.emit(item);
  }

}
