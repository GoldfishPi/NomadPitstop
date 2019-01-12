import { Component, OnInit, Input } from '@angular/core';
import { PitstopService } from '../../../services/pitstop/pitstop.service';
import { Pitstop } from '../../../interfaces/pitstop';
import { Router } from '@angular/router';

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

    constructor(private pitstopServerice: PitstopService, private router: Router) {}

    ngOnInit() {
        this.name = this.pitstop.name;
        this.connection = this.pitstopServerice.internetWords(this.pitstop.connection);
        this.notes = this.pitstop.notes;
        this.id = this.pitstop.id;
        console.log('somthings been created')
    }
    onClick() {
        this.router.navigateByUrl('/pitstops/map/'+this.id);
        console.log('ive been clicked')
    }
}
