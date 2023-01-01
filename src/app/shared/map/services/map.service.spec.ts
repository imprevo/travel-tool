import { MockBuilder, ngMocks } from 'ng-mocks';
import { MapModule } from '../map.module';
import { MapService } from './map.service';

describe('MapService', () => {
  beforeEach(() => MockBuilder(MapService, MapModule));

  it('should be created', () => {
    const service = ngMocks.get(MapService);

    expect(service).toBeTruthy();
  });
});
