import { TestBed } from '@angular/core/testing';

import { PhoneListService } from './phone-list.service';

describe('PhoneListDeleteService', () => {
  let service: PhoneListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
