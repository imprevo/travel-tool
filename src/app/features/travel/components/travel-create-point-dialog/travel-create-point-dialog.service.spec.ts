import { MockBuilder, ngMocks } from 'ng-mocks';
import { TravelModule } from '../../travel.module';
import { TravelCreatePointDialogService } from './travel-create-point-dialog.service';

describe('TravelCreatePointDialogService', () => {
  beforeEach(() => MockBuilder(TravelCreatePointDialogService, TravelModule));

  it('should be created', () => {
    const service = ngMocks.get(TravelCreatePointDialogService);

    expect(service).toBeTruthy();
  });
});
