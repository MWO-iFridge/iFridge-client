import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from  '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  alert:string;

  constructor( private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { 
    if (this.authService.isAuthenticated()){
      //user is already logged in
      this.router.navigateByUrl('/dashboard');
    }
  
  }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get controls() { 
    return this.loginForm.controls; 
  }

  logIn(){
    
    this.submitted = true;
    this.alert = '';
  
    if(this.loginForm.invalid){
      return;
    }

    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        data => {    
          if (data.auth_token){   
            this.router.navigateByUrl('/dashboard')
          }else{
            this.alert = "Invalid username/password combination."
          }
        }, 
        error => this.alert = "Server error while logging in."
      )

      this.loginForm.reset()
      this.submitted = false;
  }

  resetPassword(){
    
    this.alert = '';

    if (this.loginForm.value.username){
      this.authService.reset(this.loginForm.value.username)
        .subscribe(
          data => this.alert = "We sent you a link to reset your password.",
          error => this.alert = "Server error while resetting password."
        )
    }else{
      this.alert = "Please enter your email address first."
    }

    this.loginForm.reset()
  }
}
