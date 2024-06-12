import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersDataService } from './services/users-data.service';
import { NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormGroup,FormControl,Validator } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule,CommonModule],
  template: `
  <div>{{title}}</div>
  <div>{{name}}</div>
 
  <br>
  <form [formGroup]="loginForm" (ngSubmit)="loginUser()">
  <input formControlName="user" name="name" type="text" >
  <span *ngIf="user && user.invalid && user.touched" >Invalid</span>
  <button [disabled]="loginForm.invalid">submit</button>
  </form>
  
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // user:any;
  name="saurabh";
  title = 'my-app';
  // constructor(private userData:UsersDataService){
  //   userData.users().subscribe((data)=>this.users=data)

  // }
// getData(data:NgForm){
// this.user=data
// }
loginForm=new FormGroup({
  user:new FormControl('',[Validators.required,Validators.email])
})
get user(){
  return this.loginForm.get('user')
}
loginUser(){
  console.warn(this.loginForm.value)
}
}
