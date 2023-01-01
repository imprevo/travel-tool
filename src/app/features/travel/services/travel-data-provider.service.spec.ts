import { MockBuilder, ngMocks } from 'ng-mocks';
import { TravelModule } from '../travel.module';
import { TravelDataProviderService } from './travel-data-provider.service';

describe('TravelDataProviderService', () => {
  beforeEach(() => MockBuilder(TravelDataProviderService, TravelModule));

  it('should be created', () => {
    const service = ngMocks.get(TravelDataProviderService);

    expect(service).toBeTruthy();
  });
});
