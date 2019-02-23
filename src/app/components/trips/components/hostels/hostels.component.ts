import { Component, OnInit } from '@angular/core';
import { HospitalityService } from '../../../../services/hospitality/hospitality.service';
import { Hostel } from '../../../../interfaces/hostel';

@Component({
    selector: 'app-hostels',
    templateUrl: './hostels.component.html',
    styleUrls: ['./hostels.component.less']
})
export class HostelsComponent implements OnInit {
    hostels: Array<Hostel>;
    constructor(private hospitalityService: HospitalityService) {}

    ngOnInit() {
        this.hospitalityService
            .getHostels()
            .subscribe((hostels: Array<Hostel>) => {
                this.hostels = hostels
                    // .sort((a, b) => {
                    //     return a.rating <= b.rating;
                    // })
                    .slice(0, 3);
                console.log(this.hostels);
            });
    }
}
