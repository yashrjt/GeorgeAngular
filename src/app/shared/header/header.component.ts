import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {

    this.auth.isLoggedInObservable.subscribe((value)=>{
      this.isLoggedIn=value;
    })
  }

  logOut(){
    this.auth.isLoggedInSubject.next(false);
   this.auth.logout();
  }

}
