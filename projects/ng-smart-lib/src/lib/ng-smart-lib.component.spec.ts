import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSmartLibComponent } from './ng-smart-lib.component';

describe('NgSmartLibComponent', () => {
  let component: NgSmartLibComponent;
  let fixture: ComponentFixture<NgSmartLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSmartLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSmartLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
