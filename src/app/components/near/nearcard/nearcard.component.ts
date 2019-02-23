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
        this.location.go('/map/' + this.pitstop.id);
        console.log('url', this.router.url);
        if (this.router.url.indexOf('map') <= 0) {
            this.router.navigate(['map', this.pitstop.id]);
        }
    }
}
