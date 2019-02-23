import { Component, OnInit } from '@angular/core';
import { PitstopService } from '../../../../services/pitstop/pitstop.service';
import { Pitstop } from '../../../../interfaces/pitstop';

@Component({
    selector: 'app-workspaces',
    templateUrl: './workspaces.component.html',
    styleUrls: ['./workspaces.component.less']
})
export class WorkspacesComponent implements OnInit {
    workspaces: Array<Pitstop>;
    constructor(private pitstopService: PitstopService) {}

    ngOnInit() {
        this.pitstopService
            .getPitstops()
            .subscribe((pitstops: Array<Pitstop>) => {
                console.log('pitstops', pitstops);
                this.workspaces = pitstops.slice(0, 2);
            });
    }
}
