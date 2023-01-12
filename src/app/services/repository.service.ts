import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ROOT_API_URL, ISSUES_PER_PAGE } from '../config';
import { RepoData, RepositoryResponse } from '../interfaces/repo.interface';
import { IssuesList, IssuesResponse } from '../interfaces/issue.interface';
import { errorCheck } from '../store/actions/repository.action';
import { AppStore } from '../store/app.states';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  issues_per_page = ISSUES_PER_PAGE;
  constructor(
    private readonly http: HttpClient,
    private readonly repositoriesStore: Store<AppStore>
  ) {}

  fetchRepository(
    owner: string,
    repo: string,
    onSuccess: (data: RepoData) => void
  ): void {
    const url = `${ROOT_API_URL}repos/${owner}/${repo}`;

    this.http.get<RepositoryResponse>(url).subscribe(
      (data): void => {
        const repository = {
          id: data.id,
          name: data.name,
          description: data.description,
          created_at: data.created_at,
          git_url: data.git_url,
          homepage: data.homepage,
          language: data.language,
          visibility: data.visibility,
          private: data.private,
          full_name: data.full_name,
          issuesCount: data.open_issues_count,
          owner: {
            id: data.owner.id,
            login: data.owner.login,
            avatar_url: data.owner.avatar_url,
          },
        };
        onSuccess(repository);
        this.repositoriesStore.dispatch(errorCheck({ ok: true }));
      },
      (error: HttpErrorResponse) => {
        if (!error.ok) {
          this.repositoriesStore.dispatch(errorCheck({ ok: error.ok }));
        }
      }
    );
  }

  fetchIssues(
    owner: string,
    repo: string,
    page = 1,
    onSuccess: (issues: IssuesList) => void
  ): void {
    const url = `${ROOT_API_URL}repos/${owner}/${repo}/issues?per_page=${this.issues_per_page}&page=${page}`;
    this.http.get<IssuesResponse>(url).subscribe((data): void => {
      onSuccess(data);
    });
  }
}
