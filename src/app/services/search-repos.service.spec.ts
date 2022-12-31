import { TestBed } from '@angular/core/testing';

import { SearchReposService } from './search-repos.service';

describe('SearchReposService', () => {
  let service: SearchReposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchReposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
