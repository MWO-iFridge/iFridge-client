import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  private getProfileUrl: string;
  private sendUserUrl: string;
  private checkPasswordUrl: string;
  
  constructor(private http: HttpClient) {
    this.getProfileUrl = 'http://localhost:8080/profile'
    this.sendUserUrl = 'http://localhost:8080/save-profile'
    this.checkPasswordUrl = 'http://localhost:8080/check-password'
   }

   public getProfileData(username: String){
     return this.http.post<User>(this.getProfileUrl, username);
   }

   public sendUserData(user: User){
     return this.http.post<String>(this.sendUserUrl, user);
   }

   public checkPassword(username: string, old_password: string, new_password: string){
     var credentials = {"username": username, "oldPassword": old_password, "newPassword": new_password};
     return this.http.post<boolean>(this.checkPasswordUrl, credentials);
   }
}
