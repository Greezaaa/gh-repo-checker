import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppStore } from 'src/app/store/app.states'
import { RepositoryService } from '../../services/repository.service'
import { receiveIssues, setIssuesPage } from 'src/app/store/actions/repository.action'
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent {
  pages: number[] = []
  ISSUES_PER_PAGE: number = 30
  repoUrl: string = ""
  issuesCount: number = 0
  actualPage: number = 0
  lastPage: number = 0
  constructor(
    private readonly repositoriesStore: Store<AppStore>,
    private readonly repositoryService: RepositoryService
  ) {
    this.repositoriesStore.select(state => state.repository).subscribe(
      (data) => {

        if (data.data?.issuesCount !== undefined) {
          this.issuesCount = data.data?.issuesCount
          this.repoUrl = data.url
        }
        if (data.issues?.page !== undefined) {
          this.actualPage = data.issues?.page
          this.lastPage = data.issues?.lastPage
        }
        if (data.issues?.lastPage !== 0) {
          for (let i = 1; i <= this.lastPage / this.ISSUES_PER_PAGE; i++) {
            this.pages.push(i);
            
          }
          console.log(this.pages);
          
        }
      }
    )
  }

  async changePage(page: number) {
    this.repositoriesStore.dispatch(setIssuesPage({ page }))
    const { owner, repo } = this.repositoryService.getRepoDataFromUrl(this.repoUrl)

    this.repositoryService.fetchIssues(owner, repo, page, (issues) => {
      this.repositoriesStore.dispatch(receiveIssues({ issues }))
    })
    this.pages = []
  }
}
