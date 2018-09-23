import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.less']
})
export class AdderComponent implements OnInit {

  modifier:string = "";
  adderIcon:string = "+"
  open:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleAdder(event) {
    if(this.open) {
      this.modifier = ""
      this.adderIcon = '+'
      this.open = false;
    } else if(!this.open) {
      this.modifier = "open";
      this.adderIcon = '-'
      this.open = true;
    }
  }
  expandAdder(event) {
    this.modifier = 'open expand';
  }
}
