import { MockBuilder, MockRender } from 'ng-mocks';
import { PointFactory } from '../../fabrics/point.factory';
import { CoordinateModel } from '../../models/coordinate.model';
import { PointModel } from '../../models/point.model';
import { TravelModule } from '../../travel.module';
import { TravelRoutesComponent } from './travel-routes.component';

describe('TravelRoutesComponent', () => {
  beforeEach(() =>
    MockBuilder(TravelRoutesComponent, TravelModule).mock(PointFactory, {
      fromDTO: (point) =>
        new PointModel({
          name: point.name,
          coordinate: new CoordinateModel({
            lat: 1,
            lng: 1,
          }),
        }),
    })
  );

  it('should create', () => {
    const fixture = MockRender(TravelRoutesComponent);

    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
