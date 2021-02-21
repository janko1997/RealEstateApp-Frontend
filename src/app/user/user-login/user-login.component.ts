import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private AuthService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const token = this.AuthService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.userName);
      this.alertify.success('Login Successfull');
      this.router.navigate(['/']);
    } else {
      this.alertify.error('User id or password is wrong');
    }
  }
}
