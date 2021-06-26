import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calendar-example',
  templateUrl: './calendar-example.component.html',
  styleUrls: ['./calendar-example.component.scss']
})
export class CalendarExampleComponent implements OnInit {

  selected: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
