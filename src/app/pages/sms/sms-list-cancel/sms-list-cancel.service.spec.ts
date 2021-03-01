import { TestBed } from '@angular/core/testing';

import { SmsListCancelService } from './sms-list-cancel.service';

describe('ListCancelService', () => {
  let service: SmsListCancelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsListCancelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
