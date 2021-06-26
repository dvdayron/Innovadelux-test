import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clock-example',
  templateUrl: './clock-example.component.html',
  styleUrls: ['./clock-example.component.scss']
})
export class ClockExampleComponent implements OnInit {

  chronometerStatus: string;

  constructor() { }

  ngOnInit(): void {
  }

  alert(event: any): void {
    alert(event);
  }

}
