import { TestBed } from '@angular/core/testing';

import { UlvisService } from './ulvis.service';

describe('UlvisService', () => {
  let service: UlvisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UlvisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
