// import { Component } from '@angular/core';
// import { NgAlertService } from '../../../ng-smart-lib/src/lib/components/alert/ng-alert-service';

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: ` <div class="header">
      <ul>
        <li><a href="" routerLink="timer">Timer</a></li>
        <li><a href="" routerLink="alert">Alert</a></li>
      </ul>
    </div>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
