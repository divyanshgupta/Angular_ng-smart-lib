import { NgModule } from '@angular/core';
import { NgAlertComponent } from './components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { NgTimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [NgAlertComponent, NgTimerComponent],
  imports: [CommonModule],
  exports: [NgAlertComponent, NgTimerComponent],
})
export class NgSmartLibModule {}
