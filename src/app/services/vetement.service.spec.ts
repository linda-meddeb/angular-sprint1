import { TestBed } from '@angular/core/testing';

import { VetementService } from './vetement.service';

describe('VetementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VetementService = TestBed.get(VetementService);
    expect(service).toBeTruthy();
  });
});
