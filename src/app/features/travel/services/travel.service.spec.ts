import { MockBuilder, ngMocks } from 'ng-mocks';
import { TravelService } from './travel.service';

describe('TravelService', () => {
  beforeEach(() => MockBuilder(TravelService));

  it('should be created', () => {
    const service = ngMocks.get(TravelService);

    expect(service).toBeTruthy();
  });
});
