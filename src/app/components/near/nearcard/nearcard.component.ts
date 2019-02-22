import { Component, OnInit, Input } from '@angular/core';
import { PitstopService } from '../../../services/pitstop/pitstop.service';
import { Pitstop } from '../../../interfaces/pitstop';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-nearcard',
    templateUrl: './nearcard.component.html',
    styleUrls: ['./nearcard.component.less']
})
export class NearcardComponent implements OnInit {
    name: String;
    connection: String;
    notes: String;
    id: String;

    @Input('pitstop') pitstop: Pitstop;

    constructor(
        private pitstopServerice: PitstopService,
        private router: Router,
        private location: Location
    ) {}

    ngOnInit() {
        this.name = this.pitstop.name;
        this.connection = this.pitstopServerice.internetWords(
            this.pitstop.connection
        );
        this.notes = this.pitstop.notes;
        this.id = this.pitstop.id;
    }
    onClick() {
        console.log('does this even work');
        this.pitstopServerice.setFocus(
            this.pitstop.longitude,
            this.pitstop.latitude
        );
        // this.pitstopServerice
        //     .getPitstopById(this.id)
        //     .subscribe((pitstop: Pitstop) => {
        //         // location.go('/map/' + this.id);
        //         this.location.go('/map/' + this.id);
        //         // this.router.navigate(['map', this.id]);
        //         // this.router.navigateByUrl('/map/' + this.id);
        //     });
    }
}
