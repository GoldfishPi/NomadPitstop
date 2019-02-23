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
import { AboutComponent } from './components/about/about.component';
import { AuthService } from './services/auth/auth.service';
import { ApiService } from './services/api/api.service';
import { MapGuard } from './guards/map/map.guard';
import { TripDashboardComponent } from './components/trips/trip-dashboard/trip-dashboard.component';
import { HostelsComponent } from './components/trips/components/hostels/hostels.component';
import { HospitalityService } from './services/hospitality/hospitality.service';
import { WorkspacesComponent } from './components/trips/components/workspaces/workspaces.component';
import { WeatherComponent } from './components/trips/components/weather/weather.component';
import { Ng2WeatherIconsModule } from 'ng2-weather-icons';
import { DashboardModuleComponent } from './components/trips/trip-dashboard/dashboard-module/dashboard-module.component';
import { DestinationsComponent } from './components/trips/components/destinations/destinations.component';
import { TimelineComponent } from './components/trips/components/timeline/timeline.component';
import { ModalComponent } from './components/modal/modal.component';

const appRoutes: Routes = [
    { path: '', component: LandingComponent, data: { depth: 1 } },
    { path: 'map', component: MapComponent, data: { depth: 1 } },
    { path: 'login', component: LoginComponent, data: { depth: 2 } },
    { path: 'signup', component: SignupComponent, data: { depth: 3 } },
    { path: 'blog', component: BlogsComponent },
    { path: 'blog/:id', component: BlogComponent },
    { path: 'map/:id', component: MapComponent, pathMatch: 'full' },
    { path: 'nearme', component: NearComponent },
    { path: 'about', component: AboutComponent },
    { path: 'trip', component: TripDashboardComponent }
];

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
        AboutComponent,
        TripDashboardComponent,
        HostelsComponent,
        WorkspacesComponent,
        WeatherComponent,
        DashboardModuleComponent,
        DestinationsComponent,
        TimelineComponent,
        ModalComponent
    ],
    imports: [
        CommonModule,
        NgtUniversalModule,

        TransferHttpCacheModule,
        HttpClientModule,

        CommonModule,
        NgtUniversalModule,

        TransferHttpCacheModule,
        HttpClientModule,

        Ng2WeatherIconsModule,

        // .withServerTransition({ appId: 'nomadpitstops' }),
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes
            //   { enableTracing: true }
        ),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBl8LKxRF1gdmnZjW5NHf3DEHcGCa7AVzY'
        }),
        // JwtModule.forRoot({
        //     config: {
        //         tokenGetter: tokenGetter,
        //         whitelistedDomains: ['localhost:3001'],
        //         blacklistedRoutes: ['localhost:3001/auth/']
        //     }
        // }),
        BrowserAnimationsModule,
        GooglePlaceModule
    ],
    providers: [
        PitstopService,
        BlogService,
        AuthService,
        ApiService,
        HospitalityService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
