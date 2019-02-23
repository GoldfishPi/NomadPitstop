import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    username: String;
    password: String;
    constructor(private router: Router, private authService: AuthService) {}

    ngOnInit() {}

    onLoginSubmit() {
        const user: any = {
            username: this.username,
            password: this.password
        };
        this.authService.logIn(this.username, this.password).subscribe(data => {
            if (data.success) {
                this.router.navigate(['/']);
            }
        });
    }
}
