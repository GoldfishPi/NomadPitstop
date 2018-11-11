import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';
import { Point } from '../../interfaces/point';
import { PitstopService } from '../../services/pitstop/pitstop.service';
import { Pitstop } from '../../interfaces/pitstop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  latitude = 51.678418;
  longitude = 7.809007;

  markerPlaced = false;
  defaultUI = false;
  isMarkerPlaceable = false;

  markers:Array<Pitstop>;
  point: Point;

  ngOnInit() {
    let pitstops = this.pitstopService.getPitstops().subscribe((data) => {
        console.log("gooted data", data)
        this.markers = data;
    })
    console.log('pitstops', pitstops)
  }
  constructor(private pitstopService: PitstopService) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
        return position;
      }.bind(this)
    );
  }
  onChooseLocation(e) {
    if (this.isMarkerPlaceable) {
      this.point = {
        longitude: e.coords.lng,
        latitude: e.coords.lat
      };
    }
  }
  toggleAdding(e) {
    this.isMarkerPlaceable = e;
  }
}
