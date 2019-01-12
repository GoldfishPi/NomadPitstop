import { Component, OnInit, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';
import { Router } from '@angular/router';
// import shareFacebook = require('share-facebook');
import * as shareFacebook from 'share-facebook';

@Component({
    selector: 'app-social-share',
    templateUrl: './social-share.component.html',
    styleUrls: ['./social-share.component.less']
})
export class SocialShareComponent implements OnInit {
    constructor(
        @Inject(WINDOW) private window: Window,
        private router: Router
    ) {}

    ngOnInit() {}
    shareToFacebook() {
        this.window.open(
            'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnomadpitstops.com' +
                this.router.url,
            'Facebook Share',
            'height=450, width=550'
        );
        if (this.window) {
        }
    }
    onTweet() {
        var url = 'https://twitter.com/intent/tweet';
        var text = 'https://nomadpitstops.com'+this.router.url +' #digitalnomad';
        var hashtag = '#nomadpitstops';
        var via = 'username';
        this.window.open(
            url + '?text=' + text + ';hastag=' + hashtag + ';via=' + via,
            'Twitter',
            'height=450, width=550'
        );
    }
}
