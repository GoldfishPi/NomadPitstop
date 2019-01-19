import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  email;
  username;
  password;
  confirmPassword;
  user: User;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  onSignupSubmit() {
    this.user = {
      email: this.email,
      username: this.username,
      password: this.password,
    };
  }

}
