import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
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
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user: any = {
      username: this.username,
      password: this.password,
    };

    this.authService.authenticateUser(user).subscribe((data: any) => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['']);
      } else {
        this.router.navigate(['login']);
      }
    });

  }

}
