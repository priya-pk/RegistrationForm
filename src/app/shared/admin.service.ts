import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  registeredAdmin(admin){
    return this.http.post<any>('http://localhost:3000/api/register',admin);
  }
  loginAdmin(admin){
    return this.http.post<any>('http://localhost:3000/api/login',admin);
  }
}


