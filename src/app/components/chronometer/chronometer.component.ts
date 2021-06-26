import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.scss']
})
export class ChronometerComponent {

  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  milliseconds: number = 0;
  time: number = 0;
  intervalSubscription: number;

  @Output() onStatusChange: EventEmitter<string> = new EventEmitter();

  stop(): void {
    if (this.intervalSubscription != null) {
      window.clearInterval( this.intervalSubscription );
    }
    // status emited
    this.onStatusChange.emit('stop');
  }

  reset(): void {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
    this.time = 0;
    // status emited
    this.onStatusChange.emit('reset');
  }

  start(): void {
    // prevent multiple
    this.stop();
    // start event
    this.intervalSubscription = window.setInterval(() => {
      this.time += 237;
      this.calculate();
    }, 237);
    // status emited
    this.onStatusChange.emit('start');
  }

  calculate(): void {
    let acumulatedTime = this.time;
    this.hours = Math.floor(acumulatedTime / 1000 / 60 / 60);
    acumulatedTime = this.hours <= 0 ? acumulatedTime : (acumulatedTime - (this.hours * 60 * 60 * 1000));
    this.minutes = Math.floor(acumulatedTime / 1000 / 60);
    acumulatedTime = this.minutes <= 0 ? acumulatedTime : (acumulatedTime - (this.minutes * 60 * 1000));
    this.seconds = Math.floor(acumulatedTime / 1000);
    acumulatedTime = this.seconds <= 0 ? acumulatedTime : (acumulatedTime - (this.seconds * 1000));
    this.milliseconds = acumulatedTime;
  }

}
