import { TestBed, inject } from '@angular/core/testing';

import { CourseListingServiceService } from './course-listing-service.service';

describe('CourseListingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseListingServiceService]
    });
  });

  it('should be created', inject([CourseListingServiceService], (service: CourseListingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
