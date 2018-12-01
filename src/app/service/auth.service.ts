import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Observable} from 'rxjs';
import{map} from 'rxjs/operators'
  import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(email:string,password:string){
    return this.http.post<any>('/api/auth',{email:email,password:password})
    .pipe(map(user =>{
      if(user && user.token){
        localStorage.setItem('currentUser',JSON.stringify(user))
      }
      return user;
    }))
  }
}
