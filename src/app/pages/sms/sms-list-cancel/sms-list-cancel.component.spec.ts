import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsListCancelComponent } from './sms-list-cancel.component';

describe('ListCancelComponent', () => {
  let component: SmsListCancelComponent;
  let fixture: ComponentFixture<SmsListCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsListCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsListCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
