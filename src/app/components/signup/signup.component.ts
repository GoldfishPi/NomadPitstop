import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  private email;
  private username;
  private password;
  private confirmPassword;
  private user: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignupSubmit() {
    this.user = {
      email: this.email,
      username: this.username,
      password: this.password,
    };
    // TODO: Add confirmation service to make sure this is all gucci information were sending back
    this.authService.registerUser(this.user).subscribe((data: any) => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['login']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }

}
