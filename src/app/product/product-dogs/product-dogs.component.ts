import { Component, OnInit } from '@angular/core';
import {GetMusicService} from '../../services/get-music.service';

@Component({
  selector: 'app-product-dogs',
  templateUrl: './product-dogs.component.html',
  styleUrls: ['./product-dogs.component.css']
})
export class ProductDogsComponent implements OnInit {
  dogBreeddsList:Array<any>=[];
  result:any;
   constructor(private music:GetMusicService) { }

  ngOnInit() {
    console.log('dog page inits')
    this.getDogsList();
  }
  getDogsList(){
    this.music.getDogDetails().subscribe((res=>{
      this.result=res;
     console.log("TCL: ProductsComponent -> getMusic -> this.result", this.result)
      for(let i in this.result){
      this.dogBreeddsList.push(i);  
       }
       console.log("TCL: ProductsComponent -> getMusic ->  this.dogBreeddsList",  this.dogBreeddsList)
     
    }),
    (err)=>{
    console.log("TCL: ProductsComponent -> getMusic -> err", err)      
    }
    
    
    );
  }

}
