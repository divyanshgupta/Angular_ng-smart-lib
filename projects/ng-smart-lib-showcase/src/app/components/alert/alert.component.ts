import { Component } from '@angular/core';
import { NgAlertService } from 'projects/ng-smart-lib/src/lib/components/alert/ng-alert-service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  constructor(private alertService: NgAlertService) {}

  public createSuccessMessage(): void {
    console.log('testing');
    this.alertService.createSuccessAlert('Sample success message');
  }

  public createDangerMessage(): void {
    this.alertService.createDangerAlert('Sample danger message');
  }

  public createWarningMessage(): void {
    this.alertService.createWarningAlert('Sample warning message');
  }

  public createInfoMessage(): void {
    this.alertService.createInfoAlert('Sample info message');
  }
}
