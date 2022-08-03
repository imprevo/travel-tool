import { TestBed } from '@angular/core/testing';
import { LocalStorageClient } from './local-storage-client';

describe('LocalStorageClientService', () => {
  let service: LocalStorageClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
