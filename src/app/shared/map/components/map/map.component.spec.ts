import { MockBuilder, MockRender } from 'ng-mocks';
import { MapModule } from '../../map.module';
import { MapService } from '../../services/map.service';
import { MapComponent } from './map.component';

describe('MapComponent', () => {
  beforeEach(async () => {
    await MockBuilder([MapComponent, MapService], MapModule);
  });

  it('should create', () => {
    const fixture = MockRender(MapComponent);

    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
