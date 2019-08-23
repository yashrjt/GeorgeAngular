import { Component, OnInit } from '@angular/core';
import {GetMusicService} from '../services/get-music.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private music:GetMusicService) { }
  result:any;
  dogBreeddsList:Array<any>=[];
  postsData:any;
  imageUrl:string;
  ngOnInit() {
    console.log(!!10);
    console.log(!!'yash');
    console.log(!!undefined);
  }

  getMusic(){
    this.music.getMusicDetails().subscribe((res=>{
      this.result=res['message'];
     console.log("TCL: ProductsComponent -> getMusic -> this.result", this.result)
      for(let i in this.result){
      this.dogBreeddsList.push(i);  
       }
       console.log("TCL: ProductsComponent -> getMusic ->  this.dogBreeddsList",  this.dogBreeddsList)
     
    }));
  }

  getImage(){
    this.music.getImage().subscribe((res=>{
      this.imageUrl=res[0]['url'];
      console.log("TCL: ProductsComponent -> getImage -> this.imageUrl", this.imageUrl)
    }));
  }

  getPosts(){
    this.music.getPosts().subscribe(res=>{
    console.log("TCL: ProductsComponent -> getPosts -> res", res)
      this.postsData=res;
    })
  }

  postForm(){
    let formData={
      trainee:'George',
      trainer:'Yash'
    }
    this.music.postData(JSON.stringify(formData)).subscribe(res=>{
      console.log("TCL: ProductsComponent -> getPosts -> res", res)
        
      })
  }
 
}
