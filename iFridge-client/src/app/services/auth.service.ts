import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import { map } from 'rxjs/operators';

import { Token } from '../model/token/token';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BACKEND_URL = "http://127.0.0.1:8080";
  private userSubject: BehaviorSubject<string>;
  currentUser: Observable<string>;

  constructor(private httpClient: HttpClient) {
    var username = this.getFromStorage('username')
    this.userSubject = new BehaviorSubject<string>(username);
    this.currentUser = this.userSubject.asObservable();
   }   

  public login(username: string, password: string){
    var credentials = {"username": username, "password": password}
    return this.httpClient.post<Token>(this.BACKEND_URL + '/authenticate', credentials)
      .pipe(map(data => {
        localStorage.setItem('auth_token', data.auth_token);
        localStorage.setItem('username', data.username);
        this.userSubject.next(data.username)
        return data;
    }));
  }

  public reset(username: string){
    var user = {"username": username} 
    return this.httpClient.post(this.BACKEND_URL + '/reset', user)
  }

  public logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');
    this.userSubject.next("")
  }

  public isAuthenticated(){  // should be better
    var token = this.getFromStorage('auth_token')
    if (token){
      return true;
    }
    return false
  }

  public getToken(){
    return localStorage.getItem('auth_token')
  }

  private getFromStorage(key: string){
    var item = localStorage.getItem(key);
    if (item === null){
      return "";
    }
    return item;
  }
}
