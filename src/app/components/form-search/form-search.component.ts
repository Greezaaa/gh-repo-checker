import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Router } from '@angular/router'

import { receiveData, receiveIssues, setUrl } from 'src/app/store/actions/repository.action'
import { AppStore } from 'src/app/store/app.states'
import { RepositoryService } from '../../services/repository.service'
import { ISSUES_PER_PAGE, getRepoDataFromUrl } from 'src/app/config'

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
})
export class FormSearchComponent {
  issues_per_page = ISSUES_PER_PAGE
  currentPage = 1
  searchedUrl = ""
  constructor(
    private router: Router,
    private readonly repositoriesStore: Store<AppStore>,
    private readonly repositoryService: RepositoryService
  ) { }

  async getRepository(repositoryUrl: string): Promise<void> {
    this.repositoriesStore.dispatch(setUrl({ url: repositoryUrl }))

    const repoUrl = getRepoDataFromUrl(repositoryUrl)
    if (!repoUrl) return 
      const { owner, repo } = repoUrl

      
      this.repositoryService.fetchRepository(owner, repo, (repository) => {
        const issuesLastPage = Math.ceil(repository.issuesCount / this.issues_per_page)
        const page = this.currentPage
        this.repositoriesStore.dispatch(receiveData({ repository, issuesLastPage, page }))
      })

      this.repositoryService.fetchIssues(owner, repo, this.currentPage, (issues) => {
        this.repositoriesStore.dispatch(receiveIssues({ issues }))
      })

      this.searchedUrl = ""
      await this.router.navigate(['/results'])

  }
}