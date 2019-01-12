import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, Output, EventEmitter , Inject} from '@angular/core';
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
  linksVisible = false;
  linksState = 'close'
  @Output() adding: EventEmitter<boolean> = new EventEmitter();
  constructor(@Inject(WINDOW) private window: Window) {
    if (window.innerWidth > 600) {
      this.linksVisible = true;
    }
  }

  ngOnInit() {
  }
  onClickHamberger(e) {
    this.linksVisible = !this.linksVisible;
    if (this.linksState === 'open') {
        this.linksState = 'close'
    } else {
        this.linksState = 'open'
    }
  }
  onAdding(e) {
    this.adding.emit(e);
  }

}
