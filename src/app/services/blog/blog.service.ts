import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    serverURL;
    httOptions;
    constructor(private http: HttpClient) {
        this.serverURL = environment.serverUrl;
        this.httOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    getBlogs() {
        return new Observable((observer) => {
            const {next, error, complete} = observer;
            var blogs = JSON.parse(window.localStorage.getItem('blogs'));
            if(blogs)observer.next(blogs);
            this.http
            .get<Array<any>>(this.serverURL + '/blog', this.httOptions)
            .pipe(map((res: any) => res))
            .subscribe(data => {
                try {
                    window.localStorage.setItem('blogs', JSON.stringify(data));
                } catch (error) {
                    
                }
                
                observer.next(data)
            })
        })
        // return this.http
        //     .get<Array<any>>(this.serverURL + '/blog', this.httOptions)
        //     .pipe(map((res: any) => res));
    }
    getBlogFromStorage(id) {
        var blog = JSON.parse(window.localStorage.getItem(`blog:${id}`));
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
