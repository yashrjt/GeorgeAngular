import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map,filter, catchError} from 'rxjs/operators';
import {Observable,throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetMusicService {

  posts$:any;
  constructor(private http:HttpClient) { }

  //Rxjs--reactive Javascript
  //$ajax
  getDogDetails(){
   return this.http.get('https://dog.ceo/api/breeds/list/all').pipe(
      map(res=>{
        return res['message'];
      }),
      catchError( (err) =>
        {
          return throwError(err);
       })
    )
  }

  getImage(){
    return this.http.get('https://api.thecatapi.com/v1/images/search').pipe(
      map(res=>{
        console.log(res);
        return res[0]['url'];
      }),
      catchError( (err) =>
        {
          return throwError(err);
       })
    )
  }

  getPosts(){
    //  return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
    //    filter(res => 
    //     {
    //      console.log("TCL: GetMusicService -> getPosts -> res", res)
    //      return res['id']
    //      })
    //  );

    //   console.log("TCL: GetMusicService -> getPosts -> this.posts$", this.posts$)
    //   return this.posts$;
    // let result=this.posts$.pipe(filter
    //   (res => res['id']>10 ),
    //  catchError( (err) =>
    //   {
    //       return throwError(err);
    //    }));

      //  console.log("TCL: GetMusicService -> getPosts -> result", result)
      //  return result;
   return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
       map(
         res=>{
         console.log("TCL: GetMusicService -> getPosts -> res", res)
           return res;
         }
       ),
       filter(res =>  res['id']>10),
    
      catchError( (err) =>
        {
          return throwError(err);
       })
    )
  }

  postData(data){
    return this.http.post('https://postman-echo.com/post',data).pipe(
      map(res=>{
      console.log("TCL: GetMusicService -> postData -> res", res)
        
      }),
      catchError( (err) =>
        {
          return throwError(err);
       })
    )
  }
}
