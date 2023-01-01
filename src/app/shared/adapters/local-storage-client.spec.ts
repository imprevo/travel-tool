import { MockBuilder, ngMocks } from 'ng-mocks';
import { LocalStorageClient } from './local-storage-client';

describe('LocalStorageClientService', () => {
  beforeEach(() => MockBuilder(LocalStorageClient));

  it('should be created', () => {
    const service = ngMocks.get(LocalStorageClient);

    expect(service).toBeTruthy();
  });
});
