import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  

  register(name:any,email:any,password:any){

    const data = {
      name,
      email,
      password
    }

    return this.http.post('http://localhost:4200/register',data);

  }


  login(email:any,password:any){
    const data = {
      email,
      password
    }
    return this.http.post('http://localhost:4200/login',data)
  }
}