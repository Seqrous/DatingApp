import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { ThrowStmt } from '@angular/compiler';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  message: string;
  user: User;

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() { }

  // call auth service to verify login
  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertify.success('logged in successfully');
      },
      (error) => {
        this.alertify.error(error);
      },
      () => {
        this.router.navigate(['/members']);
      }
    );
  }

  // return wheather token is in the local storage
  loggedIn() {
    return this.authService.loggedIn();
  }

  // remove token from the local storage
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }
}
