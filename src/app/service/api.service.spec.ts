import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from 'v3/block-pro/src/app/service/api.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
