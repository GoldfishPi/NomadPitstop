import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  latitude:number = 51.678418;
  longitude:number = 7.809007;
  defaultUI:boolean = false;
  markers = []
  constructor() {
    navigator.geolocation.getCurrentPosition(function(position) {
      this.longitude = position.coords.longitude;
      this.latitude = position.coords.latitude; 
      return position;
    }.bind(this));
  }
  onChooseLocation(e) {
    this.markers.push({
      latitude:e.coords.lat,
      longitude:e.coords.lng,
    })
    // this.latitude = e.coords.lat;
    // this.longitude = e.coords.lng;
  }
}
