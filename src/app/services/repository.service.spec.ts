import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RepositoryService } from './repository.service';
import { Store, StoreModule } from '@ngrx/store';
import { AppStore, reducers } from '../store/app.states';
import { RepoData } from '../interfaces/repo.interface';
import { ROOT_API_URL } from '../config';
import { errorCheck } from '../store/actions/repository.action';

import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('RepositoryService', () => {
  let service: RepositoryService;
  let httpMock: HttpTestingController;
  let store: Store<AppStore>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
      ],

      providers: [RepositoryService, { provide: Store, useValue: {} }],
    });

    service = TestBed.get(RepositoryService);
    httpMock = TestBed.get(HttpTestingController);
    store = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
