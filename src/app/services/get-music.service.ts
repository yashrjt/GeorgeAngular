import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetMusicService {

  constructor(private http:HttpClient) { }

  //Rxjs--reactive Javascript
  //$ajax
  getMusicDetails(){
   return this.http.get('https://dog.ceo/api/breeds/list/all').pipe(
      map(res=>{
        console.log(res);
        return res;
      })
    )
  }

  getImage(){
    return this.http.get('https://api.thecatapi.com/v1/images/search').pipe(
      map(res=>{
        console.log(res);
        return res;
      })
    )
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      map(res=>{
        console.log(res);
        return res;
      })
    )
  }

  postData(data){
    return this.http.post('https://postman-echo.com/post',data).pipe(
      map(res=>{
      console.log("TCL: GetMusicService -> postData -> res", res)
        
      })
    )
  }
}
