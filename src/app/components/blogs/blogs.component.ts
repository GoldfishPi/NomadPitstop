import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blogs',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.less']
})
export class BlogsComponent implements OnInit {

    posts = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,4,5,6,7,]

    constructor() {}

    ngOnInit() {}
}
