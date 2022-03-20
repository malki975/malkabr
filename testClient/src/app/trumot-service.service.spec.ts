import { TestBed } from '@angular/core/testing';

import { TrumotServiceService } from './trumot-service.service';

describe('ServiceService', () => {
  let service: TrumotServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrumotServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
