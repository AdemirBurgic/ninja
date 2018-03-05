import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  homeTitle: string = "Welcome to the ninja directory!";
  myString = "I like chicken";
  @Input() ninja2;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e)
  {
      this.onYell.emit(e);
  }

  myBoolean = false;
  /*ninja = 
  {
    name: "Yoshi",
    belt: "Black"
  };*/

  alertMe(val)
  {
    alert(val);
  }

  constructor() { }

  ngOnInit() {
  }

}
