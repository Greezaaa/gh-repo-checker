import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppStore } from 'src/app/store/app.states'
import { RepositoryService } from '../../services/repository.service'
import { receiveIssues, setIssuesPage } from 'src/app/store/actions/repository.action'
import { ISSUES_PER_PAGE } from 'src/app/config'
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent {
  issues_per_page = ISSUES_PER_PAGE
  pages: number[] = []
  repoUrl:string = ""
  issuesCount:number = 0
  currentPage:number = 0
  lastPage:number = 0
  isLoading:boolean = false
  constructor(
    private readonly repositoriesStore: Store<AppStore>,
    private readonly repositoryService: RepositoryService
  ) {
    this.repositoriesStore
    .select(state => state.repository.issues.isLoading)
    .subscribe((isLoading) => {this.isLoading = isLoading})

    this.repositoriesStore.select(state => state.repository).subscribe(
      (data) => {

        if (data.data?.issuesCount !== undefined) {
          this.issuesCount = data.data?.issuesCount
          this.repoUrl = data.url
        }
        if (data.issues?.page !== undefined) {
          this.currentPage = data.issues?.page
          this.lastPage = data.issues?.lastPage
        }
        if (data.issues?.lastPage !== 0) {
          this.pages = []
          for (let i = 1; i <= this.lastPage; i++) {
            this.pages.push(i)

          }
          console.log(this.pages)

        }
      }
    )
  }

  async changePage(page: number) {
    this.currentPage = page
    this.repositoriesStore.dispatch(setIssuesPage({ page }))
    const { owner, repo } = this.repositoryService.getRepoDataFromUrl(this.repoUrl)
    this.repositoryService.fetchIssues(owner, repo, page, (issues) => {
      this.repositoriesStore.dispatch(receiveIssues({ issues }))
    })
  }
}
