import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core'

import { AppComponent } from './app.component';
import { PitstopComponent } from './components/pitstop/pitstop.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdderComponent } from './components/adder/adder.component';

@NgModule({
  declarations: [
    AppComponent,
    PitstopComponent,
    NavbarComponent,
    AdderComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBl8LKxRF1gdmnZjW5NHf3DEHcGCa7AVzY',
    }),
    NgbModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
