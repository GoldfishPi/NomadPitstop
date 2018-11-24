import { Component, OnInit, Input } from '@angular/core';
import { PitstopService } from 'src/app/services/pitstop/pitstop.service';

@Component({
    selector: 'app-nearcard',
    templateUrl: './nearcard.component.html',
    styleUrls: ['./nearcard.component.less']
})
export class NearcardComponent implements OnInit {
    @Input('name') name: String;
    @Input('internet') internet: String;
    @Input('info') info: String;

    constructor() {}

    ngOnInit() {
        console.log('GOT A NAME', this.name);
    }
}
