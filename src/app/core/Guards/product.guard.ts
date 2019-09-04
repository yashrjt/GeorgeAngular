import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements CanActivate  {
  
  loggedInStatus:boolean;
  constructor(private auth:AuthService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot): boolean{

    this.auth.isLoggedInObservable.subscribe(value=>{
      if(value){
        this.loggedInStatus=true;
      }
      else{
        this.loggedInStatus=false;
      }
    })
      
    if(this.loggedInStatus){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
