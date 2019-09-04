import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenVar='jghfguy5646546nmjhk';
  constructor(private router:Router) { }
  
  isLoggedIn:boolean=false;
  isLoggedInSubject:BehaviorSubject<boolean>=new BehaviorSubject(this.isLoggedIn);
  public isLoggedInObservable=this.isLoggedInSubject.asObservable();


  login(loginCredentials){
  console.log("TCL: AuthService -> login -> loginCredentials", loginCredentials)
  localStorage.setItem('token',this.tokenVar);
  this.isLoggedInSubject.next(true);
  console.log("TCL: AuthService -> login ->   this.isLoggedIn",   this.isLoggedIn)
  this.router.navigate(['/home']);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

}

