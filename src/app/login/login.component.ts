import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: '',
    password: ''
  };
  registerInfo = '';
  errorMessage = '';

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.credentials)
      .then(res => {
        this.router.navigate(['/todo']);
      }, err => {
        console.log(err.message);
        this.errorMessage = err.message;
      });
  }

  register() {
    this.authService.register(this.credentials)
      .then(() => this.registerInfo = 'Account has been created! Now you can login using credentials you provided')
      .catch(err => this.errorMessage = err.message);
  }
}
