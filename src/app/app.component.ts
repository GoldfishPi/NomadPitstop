import { WINDOW } from '@ng-toolkit/universal';
import { Component, Inject, AfterViewInit, OnInit } from '@angular/core';
import {
    trigger,
    transition,
    group,
    query,
    style,
    animate
} from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../environments/environment';
import { BlogService } from './services/blog/blog.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (!environment.production) return;
            if (!window) return;
            if (event instanceof NavigationEnd) {
                (<any>window).ga('set', 'page', event.urlAfterRedirects);
                (<any>window).ga('send', 'pageview');
            }
        });
        this.blogService.preloadBlogs();
    }
    constructor(
        @Inject(WINDOW) private window: Window,
        private router: Router,
        private blogService: BlogService
    ) {}

    getDepth(outlet) {
        return outlet.activatedRouteData['depth'];
    }
}
