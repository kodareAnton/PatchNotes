import { TestBed } from '@angular/core/testing';

import { FetchDataDiablo4Service } from './fetch-data-diablo4.service';

describe('FetchDataDiablo4Service', () => {
  let service: FetchDataDiablo4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchDataDiablo4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
