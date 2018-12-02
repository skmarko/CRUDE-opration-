import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
addForm:FormGroup;
  constructor(private router:Router,private formBiilder:FormBuilder,private userservice:UserService) { }

  ngOnInit() {
    this.addForm=this.formBiilder.group({
      id:[],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required]
    });
  }
  onSubmit(){
    this.userservice.createUser(this.addForm.value).subscribe(data=>{
      this.router.navigate(['list-user']);
    })
  }

}
