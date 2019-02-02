import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
    blogs: Array<Object>;
    constructor(
        private blogService: BlogService,
        private router: Router,
        private meta: Meta
    ) {}

    ngOnInit() {
        this.meta.addTag({ name: 'description', content: '' });
        this.getBlogs();
    }

    getBlogs() {
        this.blogService.getBlogs().subscribe((data: any) => {
            this.blogs = data.posts;
        });
    }
    onRouteBlogPost(e, id) {
        this.router.navigate([`/blog/${id}`]);
    }
}
