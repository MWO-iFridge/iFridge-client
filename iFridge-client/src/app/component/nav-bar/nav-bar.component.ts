import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from  '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  currentUser: string;

  constructor(private router: Router, private authService: AuthService) { 
    this.authService.currentUser.subscribe(user => this.currentUser = user);
  }

  ngOnInit() {
  }

  logout(){
    this.authService.logout()
    this.router.navigateByUrl('/login');
  }

}
