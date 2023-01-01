import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { TravelModel, TravelStatus } from '../../models/travel.model';
import { TravelModule } from '../../travel.module';
import { TravelCardComponent } from './travel-card.component';

describe('TravelCardComponent', () => {
  beforeEach(() => MockBuilder(TravelCardComponent, TravelModule));

  describe('when travel is defined', () => {
    const travel = new TravelModel({
      id: '1',
      name: 'Travel name',
      description: 'Travel description',
      status: TravelStatus.NEW,
      createdDate: new Date('2022-01-01'),
      updatedDate: new Date('2022-03-01'),
    });

    it('should be created', () => {
      const fixture = MockRender(TravelCardComponent, { travel });

      expect(fixture.point.componentInstance).toBeTruthy();
    });

    it('should contain travel name', () => {
      const fixture = MockRender(TravelCardComponent, { travel });
      const name = ngMocks.find(fixture, '.card-name');

      expect(ngMocks.formatText(name)).toEqual('Travel name');
    });

    it('should contain travel description', () => {
      const fixture = MockRender(TravelCardComponent, { travel });
      const description = ngMocks.find(fixture, '.card-description');

      expect(ngMocks.formatText(description)).toEqual('Travel description');
    });

    it('should contain travel created date', () => {
      const fixture = MockRender(TravelCardComponent, { travel });
      const date = ngMocks.find(fixture, '.card-date');

      expect(ngMocks.formatText(date)).toEqual('January 1, 2022');
    });

    it('should contain edit button', () => {
      const fixture = MockRender(TravelCardComponent, { travel });
      const editBtn = ngMocks.find(fixture, '.card-edit-btn');

      expect(editBtn).toBeTruthy();
    });

    it('should emit "editTravel" event when pressing edit button', () => {
      const editSpy = jest.fn();
      const fixture = MockRender(TravelCardComponent, {
        travel,
        editTravel: editSpy,
      });
      const editBtn = ngMocks.find(fixture, '.card-edit-btn');

      ngMocks.click(editBtn);

      expect(editSpy).toBeCalledWith(travel);
    });

    it('should contain delete button', () => {
      const fixture = MockRender(TravelCardComponent, { travel });
      const deleteBtn = ngMocks.find(fixture, '.card-delete-btn');

      expect(deleteBtn).toBeTruthy();
    });

    it('should emit "deleteTravel" event when pressing delete button', () => {
      const deleteSpy = jest.fn();
      const fixture = MockRender(TravelCardComponent, {
        travel,
        deleteTravel: deleteSpy,
      });
      const deleteBtn = ngMocks.find(fixture, '.card-delete-btn');

      ngMocks.click(deleteBtn);

      expect(deleteSpy).toBeCalledWith(travel);
    });
  });

  describe('when travel is not defined', () => {
    it('should throw error', () => {
      expect(() => MockRender(TravelCardComponent)).toThrowError();
    });
  });
});
