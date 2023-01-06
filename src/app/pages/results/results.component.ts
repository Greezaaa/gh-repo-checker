import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { RepoData } from 'src/app/interfaces/repo.interface'
import { AppStore } from 'src/app/store/app.states'
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {

  repositories$: RepoData = {
    id: 0,
    name: '',
    description: '',
    created_at: '',
    git_url: '',
    homepage: '',
    language: '',
    visibility: '',
    private: false,
    full_name: '',
    issuesCount: 0,
    owner: {
      id: 0,
      login: '',
      avatar_url: '',
    }
  }
  isLoading$ = false

  constructor(
    private readonly repositoriesStore: Store<AppStore>,
    private router: Router
  ) {
    this.repositoriesStore.select(state => state.repository).subscribe(
      ({ data, isLoading, url }) => {
        if (url === '') {
          this.router.navigate(['/'])
        }
        if (data !== null) {
          this.repositories$ = data
        }
        this.isLoading$ = isLoading
      }
    )
  }
}
