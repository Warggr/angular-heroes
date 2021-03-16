import { TestBed } from '@angular/core/testing';

import { ScryscaperService } from './scryscaper.service';

describe('ScryscaperService', () => {
  let service: ScryscaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScryscaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
