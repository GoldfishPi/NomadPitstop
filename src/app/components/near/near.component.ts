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

    constructor(private pitStopServerice: PitstopService) {}

    ngOnInit() {
        this.getPitstops()
        
    }

    handleAddressChange(event) {}

    getPitstops() {
        this.pitStopServerice.getPitstops().subscribe(data => {
            this.pitstops = data;
            this.pitstops.map(data => {
                console.log(data.id)
            })
            console.log('got these gosh darn pitstops', this.pitstops)
        });

    }
}
