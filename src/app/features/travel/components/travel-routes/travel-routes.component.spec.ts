import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelCreatePointDialogService } from '../travel-create-point-dialog/travel-create-point-dialog.service';
import { TravelRoutesComponent } from './travel-routes.component';

describe('TravelRoutesComponent', () => {
  let component: TravelRoutesComponent;
  let fixture: ComponentFixture<TravelRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelRoutesComponent],
      providers: [{ provide: TravelCreatePointDialogService, useValue: {} }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
