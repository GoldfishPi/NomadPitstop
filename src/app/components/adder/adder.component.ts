import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Point } from '@agm/core/services/google-maps-types';
import { PitstopService } from '../../services/pitstop/pitstop.service';
import { Pitstop } from '../../interfaces/pitstop';
@Component({
    selector: 'app-adder',
    templateUrl: './adder.component.html',
    styleUrls: ['./adder.component.less'],
    providers: [PitstopService]
})
export class AdderComponent implements OnInit {
    modifier = '';
    adderIcon = '+';
    open = false;
    loggedIn = true;
    expanded = false;

    pitstopName = '';
    pitstopNotes = '';

    internetSpeed = 3;
    internetValue = 'Good';

    @Output()
    adding: EventEmitter<Boolean> = new EventEmitter();
    @Output()
    add: EventEmitter<Boolean> = new EventEmitter();
    @Input()
    point: Pitstop;

    constructor(
        private router: Router,
        private pitstopService: PitstopService
    ) {}

    ngOnInit() {}

    toggleAdder(event) {
        if (this.open) {
            this.modifier = '';
            this.adderIcon = '+';
            this.open = false;
            this.adding.emit(false);
        } else if (!this.open) {
            this.modifier = 'open';
            this.adderIcon = '-';
            this.open = true;
            this.adding.emit(true);
        }
        this.expanded = false;
    }
    expandAdder(event) {
        this.modifier = 'open expand';
        this.expanded = true;
    }
    onLogin() {
        this.router.navigate(['/login']);
    }
    onSignup() {
        this.router.navigate(['/signup']);
    }
    onInternetSpeedChange(event) {
        console.log(event.target.value);
        this.internetValue = this.internetWords(event.target.value);
        console.log(this.internetValue);
    }
    onAddPitstop() {
        console.log('point', this.point);
        var pitstop: Pitstop = {
            name: this.pitstopName,
            notes: this.pitstopNotes,
            connection: this.internetSpeed,
            longitude: this.point.longitude,
            latitude: this.point.latitude,
            id: null
        };
        this.modifier = '';
        this.expanded = false;
        this.open = false;
        this.adderIcon = '+';
        this.adding.emit(false);
        this.pitstopService.addPitstop(pitstop).subscribe(
            function() {
                this.add.emit(true);
            }.bind(this)
        );
    }
    internetWords(val) {
        let out: string;
        switch (val) {
            case '0':
                out = 'Awful';
                break;

            case '1':
                out = 'Very Bad';
                break;

            case '2':
                out = 'bad';
                break;

            case '3':
                out = 'Good';
                break;

            case '4':
                out = 'very good';
                break;
            default:
                out = 'Excellent';
                break;
        }
        return out;
    }
}
