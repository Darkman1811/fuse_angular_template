import { TestBed } from '@angular/core/testing';

import { RestwsService } from './restws.service';

describe('RestwsService', () => {
  let service: RestwsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestwsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
