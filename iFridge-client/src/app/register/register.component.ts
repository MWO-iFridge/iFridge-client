import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegisterService } from  '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;
  alert:string;

  constructor( private formBuilder: FormBuilder, private router: Router, private registerService: RegisterService) { 
  
  }

  ngOnInit() {
    this.registerForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      password_confirm: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required]
  });
  }

  get controls() { 
    return this.registerForm.controls; 
  }

  register(){
    
    this.submitted = true;
    this.alert = '';
  
    if(this.registerForm.invalid){
      return;
    }

    if (this.registerForm.value.password != this.registerForm.value.password_confirm) {
      this.alert = "Passwords do not match."
      return;
    }

    this.registerService.register(this.registerForm.value.username, this.registerForm.value.password, this.registerForm.value.email,
                                  this.registerForm.value.phone, this.registerForm.value.name, this.registerForm.value.surname)
      .subscribe(
        data => {    
          if (data.code == 1){   
            this.alert = "Success. Please log in."
            setTimeout(() => 
            {
              this.router.navigateByUrl('/login')
            },3000);
          } else if (data.code == 0){   
            this.alert = data.message
          }

        }, 
        error => this.alert = "Server error while logging in."
      )

      this.registerForm.reset()
      this.submitted = false;
  }


}
