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
import { environment } from '../environments/environment'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    animations: [
        trigger('routeAnimation', [
            transition('1 => 2, 2 => 3', [
                style({ height: '!' }),
                query(':enter', style({ transform: 'translateX(100%)' })),
                query(
                    ':enter, :leave',
                    style({ position: 'absolute', top: 0, left: 0, right: 0 })
                ),
                // animate the leave page away
                group([
                    query(':leave', [
                        animate(
                            '0.3s cubic-bezier(.35,0,.25,1)',
                            style({ transform: 'translateX(-100%)' })
                        )
                    ]),
                    // and now reveal the enter
                    query(
                        ':enter',
                        animate(
                            '0.3s cubic-bezier(.35,0,.25,1)',
                            style({ transform: 'translateX(0)' })
                        )
                    )
                ])
            ]),
            transition('3 => 2, 2 => 1', [
                style({ height: '!' }),
                query(':enter', style({ transform: 'translateX(-100%)' })),
                query(
                    ':enter, :leave',
                    style({ position: 'absolute', top: 0, left: 0, right: 0 })
                ),
                // animate the leave page away
                group([
                    query(':leave', [
                        animate(
                            '0.3s cubic-bezier(.35,0,.25,1)',
                            style({ transform: 'translateX(100%)' })
                        )
                    ]),
                    // and now reveal the enter
                    query(
                        ':enter',
                        animate(
                            '0.3s cubic-bezier(.35,0,.25,1)',
                            style({ transform: 'translateX(0)' })
                        )
                    )
                ])
            ])
        ])
    ]
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
    }
    constructor(
        @Inject(WINDOW) private window: Window,
        private router: Router
    ) {}

    getDepth(outlet) {
        return outlet.activatedRouteData['depth'];
    }
}
