import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  // call auth service to verify login
  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.log('Failed to log in');
    });
  }

  // return wheather token is in the local storage
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  // remove token from the local storage
  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
