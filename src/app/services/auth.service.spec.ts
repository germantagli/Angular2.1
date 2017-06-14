import { TestBed, inject } from '@angular/core/testing';

import { Auth } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth]
    });
  });

  it('should be created', inject([Auth], (service: Auth) => {
    expect(service).toBeTruthy();
  }));
});
