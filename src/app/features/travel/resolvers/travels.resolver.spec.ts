import { MockBuilder, ngMocks } from 'ng-mocks';
import { TravelModule } from '../travel.module';
import { TravelsResolver } from './travels.resolver';

describe('TravelsResolver', () => {
  beforeEach(() => MockBuilder(TravelsResolver, TravelModule));

  it('should be created', () => {
    const resolver = ngMocks.get(TravelsResolver);

    expect(resolver).toBeTruthy();
  });
});
