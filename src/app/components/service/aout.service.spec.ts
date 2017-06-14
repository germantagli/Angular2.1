import { TestBed, inject } from '@angular/core/testing';

import { AoutService } from './aout.service';

describe('AoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AoutService]
    });
  });

  it('should be created', inject([AoutService], (service: AoutService) => {
    expect(service).toBeTruthy();
  }));
});
