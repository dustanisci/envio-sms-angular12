import { TestBed } from '@angular/core/testing';

import { SmsSheduleEditService } from './sms-shedule-edit.service';

describe('SmsSheduleEditService', () => {
  let service: SmsSheduleEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsSheduleEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
