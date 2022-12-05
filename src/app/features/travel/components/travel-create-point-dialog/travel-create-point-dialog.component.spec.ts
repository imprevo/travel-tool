import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoordinateModel } from '../../models/coordinate.model';
import { TravelCreatePointDialogComponent } from './travel-create-point-dialog.component';

describe('TravelCreatePointDialogComponent', () => {
  let component: TravelCreatePointDialogComponent;
  let fixture: ComponentFixture<TravelCreatePointDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelCreatePointDialogComponent],
      providers: [
        FormBuilder,
        { provide: MatDialogRef, useValue: {} },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { coordinate: new CoordinateModel({ lat: 1, lng: 1 }) },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelCreatePointDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
