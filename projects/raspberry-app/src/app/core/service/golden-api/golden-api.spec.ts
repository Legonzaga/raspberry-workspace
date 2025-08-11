import { TestBed } from '@angular/core/testing';

import { GoldenApiService } from './golden-api';

describe('GoldenApi', () => {
  let service: GoldenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoldenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
