import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService } from '@auth0/angular-jwt';
import {serverUrl} from '../global/global';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: User;
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
  ) { }

  registerUser(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<User>(serverUrl + '/users/register', user, httpOptions)
      .pipe(map((res: any) => res));
  }

  authenticateUser(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<User>(serverUrl + '/users/authenticate', user, httpOptions)
      .pipe(map((res: any) => res));
  }

  getProfile() {
    this.loadToken();
    const header = {
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    };
    const headers = new HttpHeaders(header);
    return this.http.get(serverUrl + '/users/profile', {headers: headers})
      .pipe(map((res: any) =>  res));
  }

  addPost(post) {
    this.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authToken
      })
    };
    const id = JSON.parse(localStorage.getItem('user')).id;
    const req = {
      id: id,
      post: post
    };
    return this.http.post<any>(serverUrl + '/users/posts', req, httpOptions)
      .pipe(map((res: any) =>  res));
  }

  storeUserData(token: any, user: User) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return !this.jwtHelper.isTokenExpired();
    // return helper.isTokenExpired(this.authToken);
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
