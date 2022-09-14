import { TestBed } from '@angular/core/testing';
import { TravelCreatePointDialogService } from './travel-create-point-dialog.service';

describe('TravelCreatePointDialogService', () => {
  let service: TravelCreatePointDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelCreatePointDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
