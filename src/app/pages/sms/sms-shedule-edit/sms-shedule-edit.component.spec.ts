import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsSheduleEditComponent } from './sms-shedule-edit.component';

describe('SheduleEditComponent', () => {
  let component: SmsSheduleEditComponent;
  let fixture: ComponentFixture<SmsSheduleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsSheduleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsSheduleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
