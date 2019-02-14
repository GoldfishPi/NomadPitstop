import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { BlogPost } from '../../interfaces/blogPost';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
    blogs: Array<BlogPost>;
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
        this.blogService
            .getBlogs()
            .subscribe((data: Array<BlogPost>) => (this.blogs = data));
    }
    onRouteBlogPost(e, id) {
        this.router.navigate([`/blog/${id}`]);
    }
}
