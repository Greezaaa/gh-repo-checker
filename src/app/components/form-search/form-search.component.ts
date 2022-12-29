import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Repo } from 'src/app/intefaces/issues.inteface';
import { GHRepos } from 'src/app/services/gh-repos.service';
import { setRepos } from 'src/app/states/actions/setRepos.action';
import { searchRepos } from '../../states/actions/searchRepos.action';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { SearchRepos } from 'src/app/services/search-repos.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent {

  searchValue: string = ""

  constructor(
    private searchRepos: SearchRepos,
    private ghReposStore: Store<{ reposState: Array<Repo> }>,
  ) {}

  // searching for repository and saving to store
  getRepository(e: string) {
    console.log(e, 'this is what I search');
    this.searchRepos.getData(e).subscribe((data) => {
      this.ghReposStore.dispatch(setRepos({ repos: data.items }));
    })
    this.searchValue = ""
  }
}
