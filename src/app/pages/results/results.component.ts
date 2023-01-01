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

  constructor(
    private router: Router,
    private store: Store<{ searchState: string }>,
    private searchRepos: SearchRepos,
  ) { }
  handleClick(value: string) {
    const link = value;
    const parts = link.split("/");
    const userName = parts[parts.length - 2]; 
    const repoName = parts[parts.length - 1];  
    this.router.navigate([`/repo-info/${userName}/${repoName}`]);
  }
  getRepositories(e: string) {
    this.searchRepos.getData(e).subscribe((data) => {
      console.log(data.items); // log the data object to the console
      // this.repositories = data.items
    })
  }
  ngOnInit() {
    this.store.select<string>(state => state.searchState)
      .subscribe(searchedValue => {
        if (!searchedValue) {
          const msg = {
            msg: "Pls make a search",
            status: true
          }
          localStorage.setItem('msg', JSON.stringify(msg))
          this.router.navigate(['/']);
          return false
        }

        this.getRepositories(searchedValue)
        return true
      });
  }


}