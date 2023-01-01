import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { setSearchedValue } from 'src/app/store/actions/searchedValue.action';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
})
export class FormSearchComponent {

  searchValue = ""

  constructor(
    private router: Router,
    private searchedValueStore: Store<{ searchState: string }>
  ) { }

  // searching for repository and saving to store
  getRepository(e: string) {
    this.searchedValueStore.dispatch(setSearchedValue({ searchedValue: e }));

    this.searchValue = ""
    this.router.navigate(['/results']);
  }
}