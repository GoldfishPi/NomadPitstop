import { TestBed, inject } from '@angular/core/testing';

import { HospitalityService } from './hospitality.service';

describe('HospitalityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HospitalityService]
    });
  });

  it('should be created', inject([HospitalityService], (service: HospitalityService) => {
    expect(service).toBeTruthy();
  }));
});
