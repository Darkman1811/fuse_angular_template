import { TestBed } from '@angular/core/testing';

import { TestingGuard } from './testing.guard';

describe('TestingGuard', () => {
  let guard: TestingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
