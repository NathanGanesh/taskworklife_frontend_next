import { TestBed } from '@angular/core/testing';

import { HabitService } from './habit.service';

describe('HabitServiceService', () => {
  let service: HabitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
