import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelCreatePointDialogComponent } from './travel-create-point-dialog.component';

describe('TravelCreatePointDialogComponent', () => {
  let component: TravelCreatePointDialogComponent;
  let fixture: ComponentFixture<TravelCreatePointDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelCreatePointDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelCreatePointDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
