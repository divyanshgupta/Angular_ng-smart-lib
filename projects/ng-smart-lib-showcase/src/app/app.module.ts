import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSmartLibModule } from '../../../ng-smart-lib/src/lib/ng-smart-lib.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgSmartLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
