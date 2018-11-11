import { TestBed, inject } from '@angular/core/testing';

import { PitstopService } from './pitstop.service';

describe('PitstopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PitstopService]
    });
  });

  it('should be created', inject([PitstopService], (service: PitstopService) => {
    expect(service).toBeTruthy();
  }));
});
