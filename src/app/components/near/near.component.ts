import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { PitstopService } from '../../services/pitstop/pitstop.service';
import { Pitstop } from '../../interfaces/pitstop';

@Component({
    selector: 'app-near',
    templateUrl: './near.component.html',
    styleUrls: ['./near.component.less']
})
export class NearComponent implements OnInit {
    @ViewChild('placesRef') placesRef: GooglePlaceDirective;
    pitstops: Array<Pitstop>;

    @Input('locationFinder') locationFinder: Boolean;
    @Input('findAll') findAll: Boolean;
    options = {};
    longitude: Number;
    latitude: Number;

    constructor(private pitStopServerice: PitstopService) {}

    ngOnInit() {
        if (this.findAll) return this.getAllPitstops();
        navigator.geolocation.getCurrentPosition(
            function(position) {
                this.longitude = position.coords.longitude;
                this.latitude = position.coords.latitude;
                this.getPitstops();
                return position;
            }.bind(this)
        );
    }

    handleAddressChange(event) {}

    getPitstops() {
        this.pitStopServerice
            .getNearPitstops({
                longitude: this.longitude,
                latitude: this.latitude,
                radius: 5
            })
            .subscribe((data: Array<Pitstop>) => {
                this.pitstops = data;
            });
        // this.pitStopServerice.getPitstops().subscribe(data => {
        //     this.pitstops = data;
        //     this.pitstops.map(data => {
        //         console.log(data.id)
        //     })
        //     console.log('got these gosh darn pitstops', this.pitstops)
        // });
    }
    getAllPitstops() {
        return this.pitStopServerice
            .getPitstops()
            .subscribe((data: Array<Pitstop>) => {
                console.log('data', data);
                this.pitstops = data;
            });
    }
}
