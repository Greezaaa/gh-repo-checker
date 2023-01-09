import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RepositoryService } from './repository.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/app.states';
import { RepoData } from '../interfaces/repo.interface';
import { ROOT_API_URL } from '../config';
import { errorCheck } from '../store/actions/repository.action';

describe('RepositoryService', () => {
    let service: RepositoryService;
    let httpMock: HttpTestingController;
    let store: Store<AppStore>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                RepositoryService,
                { provide: Store, useValue: {} }
            ]
        });

        service = TestBed.get(RepositoryService);
        httpMock = TestBed.get(HttpTestingController);
        store = TestBed.get(Store);
    });

    // afterEach(() => {
    //     httpMock.verify();
    // });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should fetch a repository and dispatch an action on success', () => {
        const owner = 'angular';
        const repo = 'angular';
        const mockResponse = {
          id: 123,
          name: 'angular',
          description: 'Angular is a JavaScript framework',
          created_at: '2022-01-01',
          git_url: 'https://github.com/angular/angular',
          homepage: 'https://angular.io/',
          language: 'TypeScript',
          visibility: 'public',
          private: false,
          full_name: 'angular/angular',
          open_issues_count: 123,
          owner: {
            id: 123,
            login: 'angular',
            avatar_url: 'https://avatars3.githubusercontent.com/u/139426?v=4'
          }
        };
      
        service.fetchRepository(owner, repo, (data: RepoData) => {
          expect(data).toEqual({
            id: 123,
            name: 'angular',
            description: 'Angular is a JavaScript framework',
            created_at: '2022-01-01',
            git_url: 'https://github.com/angular/angular',
            homepage: 'https://angular.io/',
            language: 'TypeScript',
            visibility: 'public',
            private: false,
            full_name: 'angular/angular',
            issuesCount: 123,
            owner: {
              id: 123,
              login: 'angular',
              avatar_url: 'https://avatars3.githubusercontent.com/u/139426?v=4'
            }
          });
        });
      
        const req = httpMock.expectOne(`${ROOT_API_URL}repos/${owner}/${repo}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
      
        const spy = spyOn(store, 'dispatch');
        const action = { ok: true };
        service.fetchRepository(owner, repo, () => {});
        expect(spy).toHaveBeenCalledWith(errorCheck(action));
      });

});