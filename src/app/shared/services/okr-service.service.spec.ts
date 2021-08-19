import { TestBed } from '@angular/core/testing';

import { OkrServiceService } from './okr-service.service';

describe('OkrServiceService', () => {
  let service: OkrServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OkrServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
