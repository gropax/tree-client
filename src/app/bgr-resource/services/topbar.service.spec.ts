import { TestBed } from '@angular/core/testing';

import { TopbarService } from './topbar.service';

describe('TopbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopbarService = TestBed.get(TopbarService);
    expect(service).toBeTruthy();
  });
});
