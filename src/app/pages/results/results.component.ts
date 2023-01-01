import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SearchRepos } from 'src/app/services/search-repos.service';
import { Repo } from 'src/app/interfaces/searchedRepos.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent implements OnInit{

  repositories: Array<Repo>
  constructor(
    private router: Router,
    private store: Store<{ searchState: string }>,
    private searchRepos: SearchRepos,
  ) {
    this.repositories = []
  }
  handleClick(value: string) {
    const link = value;
    const parts = link.split("/");
    const userName = parts[parts.length - 2]; 
    const repoName = parts[parts.length - 1];  
    this.router.navigate([`/repo-info/${userName}/${repoName}`]);
  }
  getRepositories(value: string) {
    this.searchRepos.getData(value).subscribe((repos) => {
      this.repositories = repos.items
      console.log(this.repositories);
      
    })
  }
  ngOnInit() {
    this.store.select<string>(state => state.searchState)
      .subscribe(searchedValue => {
        this.getRepositories(searchedValue)
        return true
      });
  }


}