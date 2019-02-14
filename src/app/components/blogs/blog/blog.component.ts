import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog/blog.service';
import * as moment from 'moment';
import { Meta } from '@angular/platform-browser';
import { post } from 'selenium-webdriver/http';
import { BlogPost } from 'src/app/interfaces/blogPost';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
    title: String;
    author: String;
    body: String;
    date: String;
    snippet: String;
    post: BlogPost;
    constructor(
        private route: ActivatedRoute,
        private blogService: BlogService,
        private meta: Meta,
        private router: Router
    ) {
        // this.moment = moment.Moment = moment('')
    }

    ngOnInit() {
        this.getBlog();
        // this.moment = moment();
    }
    getBlog() {
        if (!this.route) return;
        this.route.params.subscribe(params => {
            this.blogService.getBlog(params.id).subscribe((post: BlogPost) => {
                console.log('post?', post);
                this.title = post.title;
                this.author = post.author;
                this.body = post.body;
                this.snippet = post.snippet;
                this.post = post;
                if (post.dateCreated) {
                    this.date = moment
                        .unix(Number(post.dateCreated))
                        .format('LL');
                }
                console.log('date', post.dateCreated);
                this.setTags();
            });
            // console.log('route params', moment(data.info.datePublished));
        });
    }
    setTags() {
        this.meta.addTag({ name: 'og:title', content: String(this.title) });
        this.meta.addTag({
            name: 'descriptions',
            content: String(this.snippet)
        });
        this.meta.addTag({
            name: 'og:description',
            content: String(this.snippet)
        });
        this.meta.addTag({
            name: 'og:url',
            content: String(`https://nomadpitstops.com${this.router.url}`)
        });

        this.meta.addTag({
            name: 'twitter:title',
            content: String(this.title)
        });
        this.meta.addTag({
            name: 'twitter:description',
            content: String(this.snippet)
        });
        this.meta.addTag({
            name: 'og:url',
            content: String(`https://nomadpitstops.com${this.router.url}`)
        });
    }
}
