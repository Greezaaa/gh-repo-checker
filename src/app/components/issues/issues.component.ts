import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppStore } from 'src/app/store/app.states'
import { IssuesList } from '../../interfaces/issue.interface'
@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html'
})
export class IssuesComponent {
  issues: IssuesList = []
  constructor(
    private readonly repositoriesStore: Store<AppStore>,
  ) {
    this.repositoriesStore.select(state => state.repository.issues).subscribe(
      (data => {
        this.issues = data.list
      })
    )
  }
}

