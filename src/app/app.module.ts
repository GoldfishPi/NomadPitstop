import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';
import { PitstopComponent } from './components/pitstop/pitstop.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdderComponent } from './components/adder/adder.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogComponent } from './components/blogs/blog/blog.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NearComponent } from './components/near/near.component';
import { NearcardComponent } from './components/near/nearcard/nearcard.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, data: {depth: 1}},
  {path: 'login', component: LoginComponent, data: {depth: 2}},
  {path: 'signup', component: SignupComponent, data: {depth: 3}},
  {path: 'blog', component: BlogsComponent},
  {path: 'blog/:id', component: BlogComponent}
];

export function tokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    PitstopComponent,
    NavbarComponent,
    AdderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    BlogsComponent,
    BlogComponent,
    NearComponent,
    NearcardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBl8LKxRF1gdmnZjW5NHf3DEHcGCa7AVzY',
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    }),
    BrowserAnimationsModule,
    GooglePlaceModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
