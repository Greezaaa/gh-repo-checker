import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppStore } from 'src/app/store/app.states'
import { RepositoryService } from '../../services/repository.service'
import { receiveIssues, setIssuesPage } from 'src/app/store/actions/repository.action'
import { ISSUES_PER_PAGE, getRepoDataFromUrl } from 'src/app/config'

@Component({
  selector: 'app-paginator',
  styles: [`
    .paginator_btn[disabled] {
      cursor: not-allowed;
      user-select: none;
      background-color: rgba(0,0,0,0.1);
      color: rgba(0,0,0,0.3);
    }
    .current-page {
      border: 1px solid rgb(168 85 247);
      color: rgb(168 85 247);
    }
    .current-page.active {
      background-color: rgb(168 85 247);
      color: white;
    }
  `],
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent {
  issues_per_page = ISSUES_PER_PAGE
  pages: number[] = []
  repoUrl = ''
  issuesCount = 0
  currentPage = 0
  lastPage = 0
  isLoading = false

  constructor (
    private readonly repositoriesStore: Store<AppStore>,
    private readonly repositoryService: RepositoryService
  ) {
    this.repositoriesStore
      .select(state => state.repository.issues.isLoading)
      .subscribe((isLoading) => { this.isLoading = isLoading })

    this.repositoriesStore.select(state => state.repository).subscribe(
      (repository) => {
        if (repository.data === null) return

        this.issuesCount = repository.data.issuesCount
        this.repoUrl = repository.url
        this.currentPage = repository.issues.page
        this.lastPage = repository.issues.lastPage
        this.pages = []

        for (let i = 1; i <= this.lastPage; i++) {
          this.pages.push(i)
        }
      }
    )
  }

  async changePage (page: number): Promise<void> {
    this.currentPage = page
    this.repositoriesStore.dispatch(setIssuesPage({ page }))

    const repoUrl = getRepoDataFromUrl(this.repoUrl)
    if (repoUrl != null) {
      const { owner, repo } = repoUrl
      this.repositoryService.fetchIssues(owner, repo, page, (issues) => {
        this.repositoriesStore.dispatch(receiveIssues({ issues }))
      })
    }
  }
}
