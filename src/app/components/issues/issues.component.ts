import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppStore } from 'src/app/store/app.states'
import { IssuesList } from '../../interfaces/issue.interface'
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html'
})
export class IssuesComponent {
  issues: IssuesList = []
  isExpanded = false
  constructor (
    private readonly repositoriesStore: Store<AppStore>,
    private readonly datePipe: DatePipe
  ) {
    this.repositoriesStore.select(state => state.repository.issues).subscribe(
      data => {
        this.issues = data.list.map(issue => ({ ...issue, expanded: false }))
      }
    )
  }

  transformDate (date: string): string | null {
    return this.datePipe.transform(date, 'dd-MMM-yyyy')
  }
}
