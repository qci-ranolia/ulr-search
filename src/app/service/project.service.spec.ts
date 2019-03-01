import { TestBed, inject } from '@angular/core/testing';

import { ProjectService } from 'v3/block-pro/src/app/service/project.service';

describe('ProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectService]
    });
  });

  it('should be created', inject([ProjectService], (service: ProjectService) => {
    expect(service).toBeTruthy();
  }));
});
