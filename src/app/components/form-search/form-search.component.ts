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


  getRepository(repositoryUrl: string) {
    this.repositoriesStore.dispatch(setUrl({ url: repositoryUrl }))
    console.log(repositoryUrl);
    
    this.searchedUrl = "";
    // this.router.navigate(['/results']);
  }
}