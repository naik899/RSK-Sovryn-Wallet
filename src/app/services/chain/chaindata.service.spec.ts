import { TestBed } from '@angular/core/testing';

import { ChaindataService } from './chaindata.service';

describe('ChaindataService', () => {
  let service: ChaindataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaindataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
