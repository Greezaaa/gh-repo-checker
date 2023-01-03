import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { RepoData } from 'src/app/interfaces/repo.interface'
import { AppStore } from 'src/app/store/app.states'
import { IssuesList } from '../../interfaces/issue.interface'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {
  issues: IssuesList = []
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

        console.log(data, 'check this data')
        console.log(isLoading, 'loading status')

        if (data !== null) {
          this.repositories$ = data
        }
        this.isLoading$ = isLoading
      }
    )
    this.repositoriesStore.select(state => state.repository.issues).subscribe(
    (data => {
      console.log(data)
      this.issues = data.list
    })
    )
  }
}
