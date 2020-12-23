import { TestBed } from '@angular/core/testing';

import { DashboardTevaService } from './dashboard-teva.service';

describe('DashboardTevaService', () => {
  let service: DashboardTevaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardTevaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
