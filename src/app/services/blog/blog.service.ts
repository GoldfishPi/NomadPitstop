import { WINDOW } from '@ng-toolkit/universal';
import { Injectable, Inject } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BlogPost } from '../../interfaces/blogPost';
import { ApiService } from '../api/api.service';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    serverURL;
    httOptions;
    blogPosts: Array<BlogPost> = [];
    constructor(
        @Inject(WINDOW) private window: Window,
        private api: ApiService
    ) {
        this.serverURL = environment.serverUrl;
        this.httOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    getBlogs() {
        return new Observable(observer => {
            if (this.blogPosts.length) return observer.next(this.blogPosts);
            this.api.get('/blog', {}).subscribe(data => {
                this.blogPosts = data.posts;
                this.sortPosts();
                observer.next(this.blogPosts);
            });
        });
    }
    getBlog(id: String) {
        return new Observable(observer => {
            let post = this.blogPosts.find(value => {
                return value.id === id;
            });
            if (post && post.body) {
                return observer.next(post);
            }
            return this.api
                .get('/blog/' + id, {})
                .subscribe((data: BlogPost) => {
                    this.updateBlogPost(data);
                    observer.next(data);
                });
        });
    }
    sortPosts() {
        this.blogPosts.sort((a, b) => {
            return Number(a.dateCreated) - Number(b.dateCreated);
        });
    }
    updateBlogPost(post: BlogPost) {
        let foundPost = false;
        this.blogPosts = this.blogPosts.map(p => {
            if (p.id === post.id) {
                foundPost = true;
                return post;
            }
            return p;
        });
        if (!foundPost) this.blogPosts.push(post);
        this.sortPosts();
    }
}
