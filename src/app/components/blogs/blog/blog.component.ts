import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog/blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
    title: String;
    content: String;
    constructor(
        private route: ActivatedRoute,
        private blogService: BlogService
    ) {}

    ngOnInit() {
        this.getBlog();
    }
    getBlog() {
        this.route.params.subscribe(params => {
            if (this.blogService.getBlogFromStorage(params.id)) {
                this.content = this.blogService.getBlogFromStorage(
                    params.id
                ).content;
                this.title = this.blogService.getBlogFromStorage(
                    params.id
                ).info.title;
            }
            this.blogService.getBlog(params.id).subscribe(data => {
                this.title = data.info.title;
                this.content = data.content;
                console.log('got data', data);
            });
            console.log('route params', params);
        });
    }
}
