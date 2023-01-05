import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Router } from '@angular/router'

import { receiveData, receiveIssues, setUrl } from 'src/app/store/actions/repository.action'
import { AppStore } from 'src/app/store/app.states'
import { RepositoryService } from '../../services/repository.service'
import { ISSUES_PER_PAGE } from 'src/app/config'

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
})
export class FormSearchComponent {
  issues_per_page = ISSUES_PER_PAGE
  actualPage = 1
  searchedUrl = "https://github.com/facebook/react"
  constructor(
    private router: Router,
    private readonly repositoriesStore: Store<AppStore>,
    private readonly repositoryService: RepositoryService
  ) { }

  async getRepository(repositoryUrl: string): Promise<void> {
    this.repositoriesStore.dispatch(setUrl({ url: repositoryUrl }))

    const { owner, repo } = this.repositoryService.getRepoDataFromUrl(repositoryUrl)
    this.repositoryService.fetchRepository(owner, repo, (repository) => {
      const issuesLastPage = Math.ceil(repository.issuesCount / this.issues_per_page)
      const page = this.actualPage
      this.repositoriesStore.dispatch(receiveData({ repository, issuesLastPage, page }))
    })

    this.repositoryService.fetchIssues(owner, repo, this.actualPage, (issues) => {
      this.repositoriesStore.dispatch(receiveIssues({ issues }))
    })
    
    this.searchedUrl = ""
    await this.router.navigate(['/results'])
  }
}