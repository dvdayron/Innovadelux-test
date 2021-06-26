import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  currentDateTime: Date;

  constructor() { }

  ngOnInit(): void {
    
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1);
  }

}
