import { ReactiveFormsModule } from '@angular/forms';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { TravelStatus } from '../../models/travel.model';
import { TravelModule } from '../../travel.module';
import {
  FiltersData,
  TravelListFiltersComponent,
} from './travel-list-filters.component';

describe('TravelListFiltersComponent', () => {
  beforeEach(() =>
    MockBuilder(TravelListFiltersComponent, TravelModule).keep(
      ReactiveFormsModule
    )
  );

  it('should create', () => {
    const fixture = MockRender(TravelListFiltersComponent);

    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it('should display search', () => {
    const fixture = MockRender(TravelListFiltersComponent);
    const searchField = ngMocks.find(fixture, '[formControlName="search"]');

    expect(searchField).toBeTruthy();
  });

  it('should display status', () => {
    const fixture = MockRender(TravelListFiltersComponent);
    const statusField = ngMocks.find(fixture, '[formControlName="status"]');

    expect(statusField).toBeTruthy();
  });

  it('should emit filterChanged when form is updated', () => {
    const filterChangedSpy = jest.fn();
    const fixture = MockRender(TravelListFiltersComponent, {
      filterChanged: filterChangedSpy,
    });
    const searchField = ngMocks.find(fixture, '[formControlName="search"]');
    const statusField = ngMocks.find(fixture, '[formControlName="status"]');
    const expected: FiltersData = {
      search: 'search test',
      status: TravelStatus.NEW,
    };

    ngMocks.change(searchField, expected.search);
    ngMocks.change(statusField, expected.status);

    expect(filterChangedSpy).toHaveBeenLastCalledWith(expected);
  });
});
