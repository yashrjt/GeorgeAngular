import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      email:[''],
      password:['']
    })
  }

  login(){
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value);
    console.log('you submitted the form');
    this.loginForm.reset();
  }

}
