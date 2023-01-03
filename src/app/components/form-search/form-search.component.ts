import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { receiveData, receiveIssues, setUrl } from 'src/app/store/actions/repository.action';
import { AppStore } from 'src/app/store/app.states';
import { RepositoryService } from '../../services/repository.service';
const ISSUES_PER_PAGE = 30;
@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
})
export class FormSearchComponent {

  searchedUrl = "";
  constructor(
    private router: Router,
    private readonly repositoriesStore: Store<AppStore>,
    private readonly repositoryService: RepositoryService
  ) { }

  getRepoDataFromUrl(repositoryUrl:string): {owner: string, repo: string} {
    let owner = "";
    let repo = "";
    repositoryUrl = repositoryUrl.replace(/ /g, '');
    const regex = /^https:\/\/github\.com\/[0-9a-zA-Z_-]+\/[0-9a-zA-Z_-]+\/?$/;
    if(repositoryUrl.search(regex.toString()) === -1){
      const parts = repositoryUrl.split('/');
      owner = parts[parts.length - 2];
      repo = parts[parts.length - 1]; 
    }
    return { owner, repo };
  }

  getRepository(repositoryUrl: string) {
    this.repositoriesStore.dispatch(setUrl({ url: repositoryUrl }));
    const { owner, repo } = this.getRepoDataFromUrl(repositoryUrl);

    console.log(owner, repo);

    this.repositoryService.fetchRepository(owner, repo, (repository) => {
      const issuesLastPage = Math.ceil(repository.issuesCount / ISSUES_PER_PAGE);
      this.repositoriesStore.dispatch(receiveData({ repository, issuesLastPage }));
    });

    this.repositoryService.fetchIssues(owner, repo, 1, (issues) => {
      this.repositoriesStore.dispatch(receiveIssues ({ issues }));
    });
    // this.searchedUrl = "";
    // this.router.navigate(['/results']);
  }
}