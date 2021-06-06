import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategorySelectorComponent } from './category-selector.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { NgSmartLibModule } from 'projects/ng-smart-lib/src/public-api';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgSmartLibModule,
    RouterModule.forChild([{ path: 'category-selector', component: MainComponent }]),
  ],
  declarations: [CategorySelectorComponent, MainComponent],
  exports: [MainComponent],
})
export class CategorySelectorModule {}
