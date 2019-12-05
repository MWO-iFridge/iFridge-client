import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  

import { Status } from '../model/status/status';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private BACKEND_URL = "http://127.0.0.1:8080";
  
  constructor(private httpClient: HttpClient) { }

  public register(username: string, password: string, email: string, phone: string, name:string, surname:string){
    var user_data = {
      "username": username,
      "password": password,
      "email": email,
      "phone": phone,
      "name": name,
      "surname": surname
    }
    return this.httpClient.post<Status>(this.BACKEND_URL + '/register', user_data)
  }
}
