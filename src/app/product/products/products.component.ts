import { Component, OnInit } from '@angular/core';
import {GetMusicService} from '../../services/get-music.service';
import { from } from 'rxjs';
import {map,filter} from 'rxjs/operators';
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


//emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
const source = from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }]);
console.log("TCL: ProductsComponent -> ngOnInit -> source", source)
//filter out people with age under 30
const example = source.pipe(filter(person => person.age >= 30));
//output: "Over 30: Joe"
const subscribe = example.subscribe(val => console.log(`Over 30: ${val.name}`));
  }

  getMusic(){
    this.music.getMusicDetails().subscribe((res=>{
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

  getImage(){
    this.music.getImage().subscribe((res=>{
      this.imageUrl=res;
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
