import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Issue, Repo } from 'src/app/intefaces/issues.inteface';
import { GHIssuesService } from 'src/app/services/gh-issues.service';
import { setRepos } from 'src/app/reduxStates/actions/setRepos.action';
import { SearchRepos } from 'src/app/services/search-repos.service';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  issues: Array<Issue>;
  repos$: Observable<Array<Repo>>;
  page_size: number = 5;
  page_number: number = 1;
  totalRepos: number = 0;
  pageSizeOptions: number[] = [3, 5, 10, 25];

  searchedValue: Array<Repo> = [];
  reposToSearch: string = "";
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
  constructor(
    private ghReposIssues: GHIssuesService,
    private searchRepos: SearchRepos,
    private ghReposStore: Store<{ reposState: Array<Repo> }>,
    private seachedValueStore: Store<{ searchedValue: string }>
  ) {
    this.issues = [];
    this.repos$ = ghReposStore.select('reposState');
  }

  searchrepositories(e: string) {
    this.searchRepos.getData(e).subscribe((data) => {
      this.ghReposStore.dispatch(setRepos({ repos: data.items }));
    })
    return this.searchedValue
  }
  ngOnInit() {

    this.seachedValueStore.select(state => state.searchedValue).subscribe(searchedValue => {
      console.log(searchedValue);

      this.reposToSearch = searchedValue;
      this.searchrepositories(searchedValue)
    });



    this.ghReposIssues.getData().subscribe((data) => {
      console.log(data.items)
      this.issues = data.items;
    })
    this.repos$.subscribe(repos => {
      this.totalRepos = repos.length;
    });
  }
}
