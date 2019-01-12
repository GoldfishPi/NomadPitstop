import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog/blog.service';
import * as moment from 'moment';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
    title: String;
    content: String;
    date: String;
    constructor(
        private route: ActivatedRoute,
        private blogService: BlogService
    ) {
        // this.moment = moment.Moment = moment('')
    }

    ngOnInit() {
        this.getBlog();
        // this.moment = moment();
    }
    getBlog() {
        this.route.params.subscribe(params => {
            this.blogService.getBlog(params.id).subscribe(data => {
                this.title = data.info.title;
                this.content = data.content;
                this.date = moment(data.info.datePublished).format('MMMM DD, YYYY');
                // console.log('got data', moment(data.info.datePublished).format('MMMM DD, YYYY'));
            });
            // console.log('route params', moment(data.info.datePublished));
        });
    }
}
