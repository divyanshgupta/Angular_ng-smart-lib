import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { interval, merge, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'lib-ng-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class NgTimerComponent implements OnInit {
  private subscription: Subscription;

  @Input() init = 0;
  @Input() interval = 1000;
  @ContentChild(TemplateRef) template: TemplateRef<any>;

  value: number;
  isPaused = true;

  ngOnInit(): void {
    this.value = this.init;
    this.start();
  }

  start(): void {
    this.isPaused = false;
    this.startTimer();
  }

  pause(): void {
    this.isPaused = true;
    this.stopTimer();
  }

  stop(): void {
    this.isPaused = true;
    this.value = this.init;
    this.stopTimer();
  }

  get isStoppable() {
    return this.init !== this.value;
  }

  private startTimer() {
    this.subscription = interval(this.interval).subscribe((_) => {
      this.value++;
    });
  }

  private stopTimer() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
