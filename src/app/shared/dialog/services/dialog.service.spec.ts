import { MockBuilder, ngMocks } from 'ng-mocks';
import { DialogModule } from '../dialog.module';
import { DialogService } from './dialog.service';

describe('DialogService', () => {
  beforeEach(() => MockBuilder(DialogService, DialogModule));

  it('should be created', () => {
    const service = ngMocks.get(DialogService);

    expect(service).toBeTruthy();
  });
});
