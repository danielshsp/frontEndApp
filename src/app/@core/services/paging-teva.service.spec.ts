import { TestBed } from '@angular/core/testing';

import { PagingTevaService } from './paging-teva.service';

describe('PagingTevaService', () => {
  let service: PagingTevaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagingTevaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
