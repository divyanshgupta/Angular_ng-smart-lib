import { NgModule } from '@angular/core';
import { NgSmartLibComponent } from './ng-smart-lib.component';
import { NgAlertComponent } from './components/alert/alert.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgSmartLibComponent, NgAlertComponent],
  imports: [CommonModule],
  exports: [NgSmartLibComponent, NgAlertComponent],
})
export class NgSmartLibModule {}
