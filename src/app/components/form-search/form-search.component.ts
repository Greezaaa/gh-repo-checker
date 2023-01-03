import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { setUrl } from 'src/app/store/actions/repository.action';
import { AppStore } from 'src/app/store/app.states';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
})
export class FormSearchComponent {

  searchedUrl = "";

  constructor(
    private router: Router,
    private readonly repositoriesStore: Store<AppStore>,
  ) { }
  getRepoDataFromUrl(repositoryUrl:string): {owner: string, repo: string} {
    let owner = ""
    let repo = ""
    
    repositoryUrl = repositoryUrl.replace(/ /g, '')
    const regex = /^https:\/\/github\.com\/[0-9a-zA-Z_-]+\/[0-9a-zA-Z_-]+\/?$/
    
    if(repositoryUrl.search(regex.toString()) === -1){
      // getting data from introduced url
      const parts = repositoryUrl.split('/')
      owner = parts[parts.length - 2]
      repo = parts[parts.length - 1] 
      console.log(owner, repo);
    }
    return { owner, repo }
  }
  getRepository(repositoryUrl: string) {
    // replace spaces and validate url
    
    this.repositoriesStore.dispatch(setUrl({ url: repositoryUrl }))

    const { owner, repo } = this.getRepoDataFromUrl(repositoryUrl)

    this.searchedUrl = "";
    // this.router.navigate(['/results']);
  }
}