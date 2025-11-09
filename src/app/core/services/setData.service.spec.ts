import { TestBed } from '@angular/core/testing';
import { SetService } from './setData.service';

describe('SetService', () => {
  let service: SetService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SetService] });
    service = TestBed.inject(SetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
