import { TestBed } from '@angular/core/testing';

import { PhoneCreateEditService } from './phone-create-edit.service';

describe('PhoneCreateEditService', () => {
  let service: PhoneCreateEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneCreateEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
