import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import {base64Img } from 'base64-img';

@Component({
    selector: 'app-blogs',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.less']
})
export class BlogsComponent implements OnInit {

    posts = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,4,5,6,7,]

    constructor(private blogService: BlogService) {}

    ngOnInit() {
        this.getPosts();
    }
    getPosts() {
        this.blogService.getBlogs()
            .subscribe(data => {
                console.log('ok')
                this.posts = data.posts;
            })
    }
}
