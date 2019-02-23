import { Injectable, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { ApiService } from '../api/api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    token: string;

    constructor(
        @Inject(WINDOW) private window: Window,
        private http: HttpClient
    ) {}

    logIn(username: String, password: String) {
        let options = {
            headers: null
        };
        options.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            token: this.getToken()
        });
        return new Observable(observer => {
            this.http
                .post(
                    environment.serverUrl + '/user/authenticate',
                    {
                        username: username,
                        password: password
                    },
                    {}
                )
                .subscribe(
                    data => {
                        observer.next({ success: true });
                        this.token = data.token;
                        if (this.window.localStorage)
                            this.window.localStorage.setItem(
                                'token',
                                data.token
                            );
                    },
                    err => {
                        observer.next({ success: false });
                    }
                );
        });
    }

    getLoggedIn() {
        this.getToken();
        return this.token != '' && this.token != null;
    }
    getToken() {
        if (!this.token) this.token = this.window.localStorage.getItem('token');
        return this.token || '';
    }
    logout() {
        this.token = '';
        if (this.window.localStorage) this.window.localStorage.clear();
    }
}
