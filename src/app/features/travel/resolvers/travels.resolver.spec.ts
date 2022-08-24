import { TestBed } from '@angular/core/testing';
import { TravelsResolver } from './travels.resolver';

describe('TravelsResolver', () => {
  let resolver: TravelsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TravelsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
