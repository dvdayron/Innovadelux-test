import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  timeInSeconds: number = 10;
  intervalSubscription: number;
  onCountDown: boolean = false;

  @Output() onReady: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  start(): void {
    this.onCountDown = true;
    this.calculate();
    this.intervalSubscription = window.setInterval(() => {
      this.timeInSeconds -= 1;
      this.calculate();
      if (this.timeInSeconds <= 0) {
        this.reset();
        this.onReady.emit('Countdown finished');
      }
    }, 1000);
  }

  reset(): void {
    if (this.intervalSubscription != null) {
      window.clearInterval( this.intervalSubscription );
    }
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.timeInSeconds = 0;
    this.onCountDown = false;
  }

  calculate(): void {
    let acumulatedTime = this.timeInSeconds;
    this.hours = Math.floor(acumulatedTime / 60 / 60);
    acumulatedTime = this.hours <= 0 ? acumulatedTime : (acumulatedTime - (this.hours * 60 * 60));
    this.minutes = Math.floor(acumulatedTime / 60);
    acumulatedTime = this.minutes <= 0 ? acumulatedTime : (acumulatedTime - (this.minutes * 60));
    this.seconds = acumulatedTime;
  }

}
