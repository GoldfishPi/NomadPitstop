import { Injectable, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(
        @Inject(WINDOW) private window: Window,
        private http: HttpClient
    ) {}
    post(url: String, body: any, options: any) {
        options = options || {};
        options.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            token: this.getToken()
        });
        return this.http
            .post(environment.serverUrl + url, body, options)
            .pipe(map((res: any) => res));
    }
    get(url: String, options: any) {
        options = options || {};
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            token: this.getToken()
        });
        headers.append('authToken', 'lololol');
        options.headers = headers;
        return this.http
            .get(environment.serverUrl + url, options)
            .pipe(map((res: any) => res));
    }
    getToken() {
        return 'lolol';
    }
}
