import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../../shared/material/material.module';
import { TravelListComponent } from './travel-list.component';

describe('TravelListComponent', () => {
  let component: TravelListComponent;
  let fixture: ComponentFixture<TravelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelListComponent],
      imports: [MaterialModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
