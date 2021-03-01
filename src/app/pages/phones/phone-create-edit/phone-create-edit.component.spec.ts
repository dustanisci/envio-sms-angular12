import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCreateEditComponent } from './phone-create-edit.component';

describe('PhoneCreateEditComponent', () => {
  let component: PhoneCreateEditComponent;
  let fixture: ComponentFixture<PhoneCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneCreateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
