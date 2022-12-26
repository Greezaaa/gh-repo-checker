import { TestBed } from '@angular/core/testing';

import { GhIssuesService } from './gh-issues.service';

describe('GhIssuesService', () => {
  let service: GhIssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhIssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
