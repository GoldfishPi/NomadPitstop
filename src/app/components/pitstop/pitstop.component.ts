import { Component, OnInit, Input } from '@angular/core';
import { Pitstop } from '../../interfaces/pitstop';
import { PitstopService } from '../../services/pitstop/pitstop.service';

@Component({
    selector: 'app-pitstop',
    templateUrl: './pitstop.component.html',
    styleUrls: ['./pitstop.component.less']
})
export class PitstopComponent implements OnInit {
    @Input()
    marker: Pitstop;
    constructor(private pitstopService: PitstopService) {}

    ngOnInit() {}

    getWords(marker) {
        return this.pitstopService.internetWords(marker.connection)
    }
}
