import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  latitude = 51.678418;
  longitude = 7.809007;
  defaultUI = false;
  isMarkerPlaceable = false;
  markers = [];
  ngOnInit() {}
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
