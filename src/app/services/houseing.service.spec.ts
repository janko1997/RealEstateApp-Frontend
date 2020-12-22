import { TestBed } from '@angular/core/testing';

import { HouseingService } from './houseing.service';

describe('HouseingService', () => {
  let service: HouseingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
