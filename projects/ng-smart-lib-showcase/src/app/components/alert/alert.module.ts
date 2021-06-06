import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { NgSmartLibModule } from 'projects/ng-smart-lib/src/public-api';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgSmartLibModule,
    RouterModule.forChild([{ path: 'alert', component: MainComponent }]),
  ],
  declarations: [AlertComponent, MainComponent],
  exports: [MainComponent],
})
export class AlertModule {}
