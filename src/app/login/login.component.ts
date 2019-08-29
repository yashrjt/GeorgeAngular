import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      email:[''],
      password:['']
    })
  }

  login(){
    console.log(this.loginForm.value);
    console.log('you submitted the form');
    this.loginForm.reset();
  }

}
