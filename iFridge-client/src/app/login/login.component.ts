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
  pending: boolean = false;

  constructor( private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { 
    if (this.authService.isLoggedIn){
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

  submit(){
    
    this.submitted = true;
  
    if(this.loginForm.invalid){
      return;
    }

    this.pending = true;

    this.authService.login(); // pass this.loginForm.value
    //might switch here or just redirecto later based on whether user was authenticated by the service
    this.router.navigateByUrl('/dashboard');
  }
}
