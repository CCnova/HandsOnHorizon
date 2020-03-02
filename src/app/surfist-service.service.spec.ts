import { TestBed } from '@angular/core/testing';

import { SurfistServiceService } from './surfist-service.service';

describe('SurfistServiceService', () => {
  let service: SurfistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurfistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
