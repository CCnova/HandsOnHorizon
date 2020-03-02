import { TestBed } from '@angular/core/testing';

import { BateryService } from './batery.service';

describe('BateryService', () => {
  let service: BateryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BateryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
