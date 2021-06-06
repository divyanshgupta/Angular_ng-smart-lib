import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgSmartLibModule } from '../../../ng-smart-lib/src/lib/ng-smart-lib.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimerModule } from './components/timer/timer.module';
import { AlertModule } from './components/alert/alert.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot([]), NgSmartLibModule, TimerModule, AlertModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
