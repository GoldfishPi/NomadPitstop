import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.less']
})
export class AdderComponent implements OnInit {

  modifier:string = "";
  adderIcon:string = "+"
  open:boolean = false;

  @Output() adding:EventEmitter<Boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleAdder(event) {
    if(this.open) {
      this.modifier = ""
      this.adderIcon = '+'
      this.open = false;
      this.adding.emit(false);
    } else if(!this.open) {
      this.modifier = "open";
      this.adderIcon = '-'
      this.open = true;
      this.adding.emit(true);
    }
  }
  expandAdder(event) {
    this.modifier = 'open expand';
  }
}
