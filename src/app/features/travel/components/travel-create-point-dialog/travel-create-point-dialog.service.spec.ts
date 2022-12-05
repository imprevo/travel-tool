import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { TravelCreatePointDialogService } from './travel-create-point-dialog.service';

describe('TravelCreatePointDialogService', () => {
  let service: TravelCreatePointDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MatDialog, useValue: {} },
        TravelCreatePointDialogService,
      ],
    });
    service = TestBed.inject(TravelCreatePointDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
