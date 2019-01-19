import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user: any = {
      username: this.username,
      password: this.password,
    };
  }

}
