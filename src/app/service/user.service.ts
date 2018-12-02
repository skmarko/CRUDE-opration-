import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }
  baseUrl:string="http://localhost:8000/users";
  getUsers(){
    return this.http.get<User[]>(this.baseUrl);
  }
  
  getUserById(id:number){
    return this.http.get<User>(this.baseUrl+'/'+id)
  }
  deleteUser(id:number){
    return this.http.delete(this.baseUrl+'/'+id)
  }
  createUser(user:User){
    return this.http.post(this.baseUrl,user)
  }
  updateUser(user:User){
    return this.http.put(this.baseUrl+'/'+user.id,user);
  }
}
