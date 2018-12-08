import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { PitstopService } from 'src/app/services/pitstop/pitstop.service';
import { Pitstop } from '../../interfaces/pitstop';

@Component({
    selector: 'app-near',
    templateUrl: './near.component.html',
    styleUrls: ['./near.component.less']
})
export class NearComponent implements OnInit {
    @ViewChild('placesRef') placesRef: GooglePlaceDirective;
    pitstops: Array<Pitstop>;

    options = {};
    longitude: Number;
    latitude: Number;

    constructor(private pitStopServerice: PitstopService) {}

    ngOnInit() {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                this.longitude = position.coords.longitude;
                this.latitude = position.coords.latitude;
                this.getPitstops()
                return position;
            }.bind(this)
        );
    }

    handleAddressChange(event) {}

    getPitstops() {
        this.pitStopServerice.getNearPitstops({
            longitude: this.longitude,
            latitude: this.latitude,
            radius: 5,
        })
        .subscribe(data => {
            this.pitstops = data;
        })
        // this.pitStopServerice.getPitstops().subscribe(data => {
        //     this.pitstops = data;
        //     this.pitstops.map(data => {
        //         console.log(data.id)
        //     })
        //     console.log('got these gosh darn pitstops', this.pitstops)
        // });

    }
}
