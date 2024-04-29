import { TestBed } from '@angular/core/testing';

import { GetEmployeeDataService } from './get-employee-data.service';

describe('GetEmployeeDataService', () => {
  let service: GetEmployeeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEmployeeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
