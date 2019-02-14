import { Injectable, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        @Inject(WINDOW) private window: Window,
        private http: HttpClient
    ) {}

    logIn(username: String, password: String) {
        return new Observable(observer => {});
    }

    getLoggedIn() {}
}
