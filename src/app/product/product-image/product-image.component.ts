import { Component, OnInit } from '@angular/core';
import {GetMusicService} from '../../services/get-music.service';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  constructor(private music:GetMusicService) { }
  imageUrl:string;
  ngOnInit() {
    console.log('img page inits')
    this.getImage();
  }

  getImage(){
    this.music.getImage().subscribe((res=>{
      this.imageUrl=res;
      console.log("TCL: ProductsComponent -> getImage -> this.imageUrl", this.imageUrl)
    }));
  }
}
