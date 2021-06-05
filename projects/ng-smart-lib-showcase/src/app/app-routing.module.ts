import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgAlertComponent } from 'projects/ng-smart-lib/src/lib/components/alert/alert.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: 'alert', component: NgAlertComponent }]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
