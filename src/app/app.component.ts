import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  latitude = 51.678418;
  longitude = 7.809007;
  defaultUI = false;
  isMarkerPlaceable = false;
  markers = [];
  constructor() {
    navigator.geolocation.getCurrentPosition(function(position) {
      this.longitude = position.coords.longitude;
      this.latitude = position.coords.latitude;
      return position;
    }.bind(this));
  }
  onChooseLocation(e) {
    if (this.isMarkerPlaceable) {
      this.markers.push({
        latitude: e.coords.lat,
        longitude: e.coords.lng,
      });
    }
  }
  toggleAdding(e) {
    this.isMarkerPlaceable = e;
  }
}
