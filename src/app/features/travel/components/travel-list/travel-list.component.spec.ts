import { RouterTestingModule } from '@angular/router/testing';
import { MockBuilder, MockRender } from 'ng-mocks';
import { TravelModule } from '../../travel.module';
import { TravelListComponent } from './travel-list.component';

describe('TravelListComponent', () => {
  beforeEach(() =>
    MockBuilder([TravelListComponent, RouterTestingModule], TravelModule)
  );

  it('should create', () => {
    const fixture = MockRender(TravelListComponent);

    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
