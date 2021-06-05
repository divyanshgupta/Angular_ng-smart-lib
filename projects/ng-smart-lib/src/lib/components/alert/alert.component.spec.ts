import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: NgAlertComponent;
  let fixture: ComponentFixture<NgAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgAlertComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
