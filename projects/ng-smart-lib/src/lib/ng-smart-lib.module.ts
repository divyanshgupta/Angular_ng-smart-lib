import { NgModule } from '@angular/core';
import { NgAlertComponent } from './components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { NgTimerComponent } from './components/timer/timer.component';
import { NgCategorySelectorComponent } from './components/category-selector/category-selector.component';
import { NgCategorySetComponent } from './components/category-selector/category-set/category-set.component';

@NgModule({
  declarations: [NgAlertComponent, NgTimerComponent, NgCategorySelectorComponent, NgCategorySetComponent],
  imports: [CommonModule],
  exports: [NgAlertComponent, NgTimerComponent, NgCategorySelectorComponent, NgCategorySetComponent],
})
export class NgSmartLibModule {}
