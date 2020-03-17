import { TestBed } from '@angular/core/testing';

import { BrawlersService } from './brawlers.service';

describe('BrawlersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrawlersService = TestBed.get(BrawlersService);
    expect(service).toBeTruthy();
  });
});
