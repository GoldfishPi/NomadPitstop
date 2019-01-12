import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, Output, EventEmitter, ViewChild , Inject} from '@angular/core';
import { User } from '../../interfaces/user';
import { Point } from '../../interfaces/point';
import { PitstopService } from '../../services/pitstop/pitstop.service';
import { Pitstop } from '../../interfaces/pitstop';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
    latitude = 51.678418;
    longitude = 7.809007;

    markerPlaced = false;
    defaultUI = false;
    isMarkerPlaceable = false;

    markers: Array<Pitstop>;
    point: Point;

    ngOnInit() {
        console.log('hello!')
        this.addPitstops();
        this.router.params.subscribe(data => {
            if(data.id) this.goToPitstop(data.id);
        });
    }
    constructor(@Inject(WINDOW) private window: Window, private pitstopService: PitstopService, private router: ActivatedRoute) {
        // navigator = window.navigator;
        navigator.geolocation.getCurrentPosition(
            function(position) {
                this.setScreenPosition(position.coords.longitude, position.coords.latitude)
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
    addPitstops() {
        let pitstops = this.pitstopService.getPitstops().subscribe((data:any) => {
            this.markers = data;
        });
    }
    setScreenPosition(longitude, latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }
    goToPitstop(id) {
        this.pitstopService.getPitstopById(id).subscribe(data => {
            this.setScreenPosition(data.longitude, data.latitude);
        });
    }
}
