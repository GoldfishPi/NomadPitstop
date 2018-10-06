import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Point } from '@agm/core/services/google-maps-types';

@Component({
    selector: 'app-adder',
    templateUrl: './adder.component.html',
    styleUrls: ['./adder.component.less']
})
export class AdderComponent implements OnInit {

    modifier = '';
    adderIcon = '+';
    open = false;
    loggedIn = true;
    expanded = false;

    @Output() adding: EventEmitter<Boolean> = new EventEmitter();
    @Input() point: Point;

    constructor(private router: Router) { }

    ngOnInit() {
    }

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
}
