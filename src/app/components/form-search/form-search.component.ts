import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { setSearchedValue } from 'src/app/reduxStates/actions/searchedValue.action';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent {

  searchValue: string = ""

  constructor(
    private router: Router,
    private seachedValueStore: Store<{ searchState: String }>
  ) { }

  // searching for repository and saving to store
  getRepository(e: string) {
    this.seachedValueStore.dispatch(setSearchedValue({ searchedValue: e }));

    this.searchValue = ""
    this.router.navigate(['/results']);
  }
}