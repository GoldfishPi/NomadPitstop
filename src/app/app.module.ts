import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { PitstopComponent } from './components/pitstop/pitstop.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdderComponent } from './components/adder/adder.component';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogComponent } from './components/blogs/blog/blog.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { NearComponent } from './components/near/near.component';
import { NearcardComponent } from './components/near/nearcard/nearcard.component';
import { PitstopService } from './services/pitstop/pitstop.service';
import { LandingComponent } from './components/landing/landing.component';
import { BlogService } from './services/blog/blog.service';
import { SocialShareComponent } from './components/social-share/social-share.component';

const appRoutes: Routes = [
    { path: '', component: LandingComponent, data: { depth: 1 } },
    { path: 'map', component: MapComponent, data: { depth: 1 } },
    { path: 'login', component: LoginComponent, data: { depth: 2 } },
    { path: 'signup', component: SignupComponent, data: { depth: 3 } },
    { path: 'blog', component: BlogsComponent },
    { path: 'blog/:id', component: BlogComponent },
    { path: 'pitstops/map/:id', component: MapComponent },
    { path: 'nearme', component: NearComponent }
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
        MapComponent,
        LoginComponent,
        SignupComponent,
        BlogsComponent,
        BlogComponent,
        NearComponent,
        NearcardComponent,
        LandingComponent,
        SocialShareComponent,
    ],
    imports: [
        CommonModule,
        NgtUniversalModule,

        TransferHttpCacheModule,
        HttpClientModule,

        // BrowserModule.withServerTransition({ appId: 'nomadpitstops' }),
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes
            //   { enableTracing: true }
        ),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBl8LKxRF1gdmnZjW5NHf3DEHcGCa7AVzY'
        }),
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ['localhost:3001'],
                blacklistedRoutes: ['localhost:3001/auth/']
            }
        }),
        BrowserAnimationsModule,
        GooglePlaceModule
    ],
    providers: [AuthService, PitstopService, BlogService],
    bootstrap: [AppComponent]
})
export class AppModule {}
