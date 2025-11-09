import { TestBed } from '@angular/core/testing';
import { CanDeactivateGuard } from './can-deactive.guard';

describe('CanDeactivateGuard', () => {
  let guard: CanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CanDeactivateGuard] });
    guard = TestBed.inject(CanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
