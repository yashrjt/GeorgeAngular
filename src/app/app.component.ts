import { Component, OnInit, OnDestroy } from '@angular/core';

export interface Trainee{
name:string;
age:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{

  ngOnInit(){
    console.log('App component initialized');
  }

  ngOnDestroy(){
    console.log('App component destroyed');
  }


 name:string='George';
 trainerName:string='Yash';
 arr:Array<number>=[1,4,6,8,10];
 conditionalText:boolean=false;
 trainee:Array<Trainee>=[
    {
      name:'John',
      age:20
    },
    {
      name:'Johnson',
      age:24
    },
    {
      name:'Tom',
      age:30
    },
    {
      name:'Gerrit',
      age:23
    },
 ]
 logo:string="assets/favicon.ico";
 todaysDate='08/22/2019';
 subject={
   angular:true,
   java:false
 }



 getSubmit(){
   console.log('You clicked the button')
 }
 getCompanyName(name:string){
 console.log("TCL: AppComponent -> getCompanyName -> name", name)

 }
}
