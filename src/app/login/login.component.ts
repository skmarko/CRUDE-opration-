import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
sumitted:boolean=false;
invalidLogin:boolean=false;
  constructor(private router:Router,private formBuilder:FormBuilder) { }
  onSubmit(){
    this.sumitted=true;
    if(this.loginForm.invalid){
      return;
    }
    if(this.loginForm.controls.email.value=="mark@gmail.com" && this.loginForm.controls.password.value=='mark@123'){
      this.router.navigate(['list-user'])
    }
    else{
      this.invalidLogin=true;
    }
  }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

}
