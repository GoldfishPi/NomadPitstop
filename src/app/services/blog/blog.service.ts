import { WINDOW } from '@ng-toolkit/universal';
import { Injectable, Inject } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    serverURL;
    httOptions;
    constructor(
        @Inject(WINDOW) private window: Window,
        private http: HttpClient
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
            const { next, error, complete } = observer;
            if (this.window.localStorage) {
                var blogs = JSON.parse(
                    this.window.localStorage.getItem('blogs')
                );
                if (blogs) observer.next(blogs);
            }

            this.http
                .get<Array<any>>(this.serverURL + '/blog', this.httOptions)
                .pipe(map((res: any) => res))
                .subscribe(data => {
                    try {
                        this.window.localStorage.setItem(
                            'blogs',
                            JSON.stringify(data)
                        );
                    } catch (error) {}

                    observer.next(data);
                });
        });
        // return this.http
        //     .get<Array<any>>(this.serverURL + '/blog', this.httOptions)
        //     .pipe(map((res: any) => res));
    }
    getBlogFromStorage(id) {
        if (this.window.localStorage) {
            
        }
        var blog = JSON.parse(this.window.localStorage.getItem(`blog:${id}`));
        console.log('blog', blog);
        return blog;
    }
    getBlog(id: String) {
        return this.http
            .get<Object>(this.serverURL + '/blog/' + id, this.httOptions)
            .pipe(
                map((res: any) => {
                    return res;
                })
            );
    }
}
