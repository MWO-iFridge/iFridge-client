import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../services/profile-service.service';
import { User } from '../user';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private user: User;
  private gender: string;
  private success: boolean = false;
  private success_pass: boolean = false;

  constructor(private profileService: ProfileServiceService) { }

  ngOnInit() {
    this.profileService.getProfileData(localStorage.getItem('username')).subscribe(data => this.user = data);
  }

  resetPasswordForm(){
    (<HTMLInputElement>document.getElementById('cur_pass')).value = "";
    (<HTMLInputElement>document.getElementById('new_pass')).value = "";
    (<HTMLInputElement>document.getElementById('new_pass2')).value = "";
  }

  savePassword(){
    var cur_pass = (<HTMLInputElement>document.getElementById('cur_pass')).value
    var new_pass = (<HTMLInputElement>document.getElementById('new_pass')).value
    var new_pass_repeat = (<HTMLInputElement>document.getElementById('new_pass2')).value
    if(new_pass == new_pass_repeat){
      this.user.password = cur_pass;
      this.profileService.checkPassword(this.user.username, cur_pass, new_pass).subscribe(result =>{

        if(result){
          this.success_pass = true;
          this.resetPasswordForm();
        }

      })
    }
  }

  saveProfile(){
    this.saveHeight();
    this.saveWeight();
    this.saveSex();
    this.saveDiet();
    this.profileService.sendUserData(this.user).subscribe();

    this.success = true;
  }

  saveWeight(){
    this.user.weight = parseFloat((<HTMLInputElement>document.getElementById('weight')).value);
  }

  saveHeight(){
    this.user.height = parseFloat((<HTMLInputElement>document.getElementById('height')).value);
  }

  saveSex(){
    if(this.gender == 'male'){
      this.user.male = true;
    }else if(this.gender == 'female'){
      this.user.male = false;
    }
  }

  saveDiet(){
    this.user.diet =  parseInt((<HTMLSelectElement>document.getElementById('diet_type')).value);
  }

}
