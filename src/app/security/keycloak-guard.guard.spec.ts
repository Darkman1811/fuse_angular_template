import { TestBed } from '@angular/core/testing';

import { KeycloakGuardGuard } from './keycloak-guard.guard';

describe('KeycloakGuardGuard', () => {
  let guard: KeycloakGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(KeycloakGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
