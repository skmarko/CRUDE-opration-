import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
addForm:FormGroup;
user:User;
  constructor(private router:Router,private formBuilder:FormBuilder,private userService:UserService) { }

  ngOnInit() {

    let userId=localStorage.getItem("updateUserId");
    if(!userId){
      alert("action invalid")
      this.router.navigate(['list-user']);
      return;
    }
    this.addForm=this.formBuilder.group({
      id:[],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required]
    })
    this.userService.getUserById(+userId).subscribe(data=>{
      this.addForm.setValue(data);
    })
  }
  onSubmit(){
    this.userService.updateUser(this.addForm.value).pipe(first()).subscribe(data=>{
      this.router.navigate(['list-user']);
    },
    error=>{
      alert(error)
    })
  }

}
