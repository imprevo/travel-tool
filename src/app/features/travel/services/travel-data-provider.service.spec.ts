import { TestBed } from '@angular/core/testing';
import { TravelDataProviderService } from './travel-data-provider.service';

describe('TravelDataProviderService', () => {
  let service: TravelDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
