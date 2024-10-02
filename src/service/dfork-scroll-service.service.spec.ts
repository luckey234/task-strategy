import { TestBed } from '@angular/core/testing';

import { DforkScrollServiceService } from './dfork-scroll-service.service';

describe('DforkScrollServiceService', () => {
  let service: DforkScrollServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DforkScrollServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
