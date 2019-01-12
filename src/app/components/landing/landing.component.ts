import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
    blogs:Array<Object>;
    constructor(private blogService: BlogService, private router: Router) {}

    ngOnInit() {
        this.getBlogs();
    }

    getBlogs() {
        this.blogService.getBlogs().subscribe((data:any) => {
            console.log(data);
            this.blogs = data.posts;
        });
    }
    onRouteBlogPost(e, id) {
        this.router.navigate([`/blog/${id}`])
        // console.log('ok', e, scope)
    }
}
