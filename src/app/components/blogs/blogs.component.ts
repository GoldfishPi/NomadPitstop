import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { BlogPost } from '../../interfaces/blogPost';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-blogs',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.less']
})
export class BlogsComponent implements OnInit {
    posts: Array<BlogPost>;

    constructor(
        private blogService: BlogService,
        private titleService: Title
    ) {}

    ngOnInit() {
        this.titleService.setTitle('Nomad Pit Stops | Blog');
        this.getPosts();
    }
    getPosts() {
        this.blogService
            .getBlogs()
            .subscribe((posts: Array<BlogPost>) => (this.posts = posts));
    }
}
