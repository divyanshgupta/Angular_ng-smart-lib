import { TestBed } from '@angular/core/testing';

import { NgSmartLibService } from './ng-smart-lib.service';

describe('NgSmartLibService', () => {
  let service: NgSmartLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSmartLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
