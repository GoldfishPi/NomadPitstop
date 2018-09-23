import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, group } from '@angular/animations';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  animations: [
    trigger('openItems',[
      transition(':enter', [
        style({right: '-250px'}),
        animate(200)
      ]),
      transition(':leave', [
        group([
          animate('0.2s ease', style({
            right: '-250px'
          })),
        ])
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
  linksVisible:boolean = false;
  constructor() {
    if(window.innerWidth > 600) {
      this.linksVisible = true;
    }
  }

  ngOnInit() {
  }
  onClickHamberger() {
    this.linksVisible = !this.linksVisible;
  }

}
