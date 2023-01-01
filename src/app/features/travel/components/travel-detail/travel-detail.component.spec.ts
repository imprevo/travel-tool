import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBuilder, MockInstance, MockRender, ngMocks } from 'ng-mocks';
import { of } from 'rxjs';
import { TravelModel, TravelStatus } from '../../models/travel.model';
import { TravelService } from '../../services/travel.service';
import { TravelModule } from '../../travel.module';
import { TravelCardComponent } from '../travel-card/travel-card.component';
import { TravelRoutesComponent } from '../travel-routes/travel-routes.component';
import { TravelDetailComponent } from './travel-detail.component';

describe('TravelDetailComponent', () => {
  MockInstance.scope();

  const travelId = '1';

  beforeEach(() =>
    MockBuilder(
      [TravelDetailComponent, RouterTestingModule],
      TravelModule
    ).provide({
      provide: ActivatedRoute,
      useValue: {
        paramMap: of(convertToParamMap({ id: travelId })),
      },
    })
  );

  it('should create', () => {
    const fixture = MockRender(TravelDetailComponent);

    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it('should display travel', () => {
    const travel = new TravelModel({
      id: '1',
      name: 'Travel name',
      description: 'Travel description',
      status: TravelStatus.NEW,
      createdDate: new Date('2022-01-01'),
      updatedDate: new Date('2022-03-01'),
    });
    const getTravelSpy = jest.fn(() => of(travel));
    MockInstance(TravelService, 'getTravel', getTravelSpy);
    const fixture = MockRender(TravelDetailComponent);

    expect(getTravelSpy).toBeCalledWith(travelId);
    expect(ngMocks.formatText(fixture)).not.toContain('not found');
    expect(ngMocks.find(TravelCardComponent)).toBeTruthy();
    expect(ngMocks.find(TravelRoutesComponent)).toBeTruthy();
  });

  it('should display not found message when travel is not exist', () => {
    const getTravelSpy = jest.fn(() => of(null));
    MockInstance(TravelService, 'getTravel', getTravelSpy);
    const fixture = MockRender(TravelDetailComponent);

    expect(getTravelSpy).toBeCalledWith(travelId);
    expect(ngMocks.formatText(fixture)).toContain('not found');
  });
});
