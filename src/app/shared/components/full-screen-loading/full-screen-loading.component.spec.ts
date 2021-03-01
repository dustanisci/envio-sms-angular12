import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullScreenLoadingComponent } from './full-screen-loading.component';


describe('LoaderComponent', () => {
  let component: FullScreenLoadingComponent;
  let fixture: ComponentFixture<FullScreenLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullScreenLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
