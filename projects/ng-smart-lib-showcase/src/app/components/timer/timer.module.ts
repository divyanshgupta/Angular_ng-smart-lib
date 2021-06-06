import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { NgSmartLibModule } from 'projects/ng-smart-lib/src/public-api';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgSmartLibModule,
    RouterModule.forChild([{ path: 'timer', component: MainComponent }]),
  ],
  declarations: [TimerComponent, MainComponent],
  exports: [MainComponent],
})
export class TimerModule {}
