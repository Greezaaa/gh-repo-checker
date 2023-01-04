import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { RepoData } from 'src/app/interfaces/repo.interface'
import { AppStore } from 'src/app/store/app.states'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {

  repositories$: RepoData = {
    id: 0,
    name: '',
    issuesCount: 0,
    owner: {
      id: 0,
      login: '',
      avatar: ''
    }
  }
  isLoading$ = false

  constructor(
    private readonly repositoriesStore: Store<AppStore>,
  ) {
    this.repositoriesStore.select(state => state.repository).subscribe(
      ({ data, isLoading }) => {
        if (data !== null) {
          this.repositories$ = data
        }
        this.isLoading$ = isLoading
      }
    )
  }
}
