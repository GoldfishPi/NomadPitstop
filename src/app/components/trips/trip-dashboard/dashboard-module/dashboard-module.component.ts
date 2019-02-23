import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-dashboard-module',
    templateUrl: './dashboard-module.component.html',
    styleUrls: ['./dashboard-module.component.less']
})
export class DashboardModuleComponent implements OnInit {
    @Input('name') name: String = '';
    @Input('edit') edit: Boolean = false;
    constructor() {}

    ngOnInit() {}
}
