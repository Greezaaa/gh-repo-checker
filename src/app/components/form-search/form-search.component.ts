import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Router } from '@angular/router'

import { receiveData, receiveIssues, setUrl } from 'src/app/store/actions/repository.action'
import { AppStore } from 'src/app/store/app.states'
import { RepositoryService } from '../../services/repository.service'
import { ISSUES_PER_PAGE, getRepoDataFromUrl } from 'src/app/config'
import { MSG } from 'src/app/interfaces/msg.interface'

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
})
export class FormSearchComponent {
  issues_per_page: number = ISSUES_PER_PAGE
  currentPage: number = 1
  searchedUrl: string = ""
  urlStatus: boolean = false
  msg:string = ""
  constructor(
    private router: Router,
    private readonly repositoriesStore: Store<AppStore>,
    private readonly repositoryService: RepositoryService,
  ) { }

  checkUrl(url: string): boolean {
    const repoUrl = getRepoDataFromUrl(url)
    repoUrl ? this.urlStatus = false : this.urlStatus = true
    return this.urlStatus
  }

  async getRepository(repositoryUrl: string): Promise<void> {
    this.repositoriesStore.dispatch(setUrl({ url: repositoryUrl }))

    const repoUrl = getRepoDataFromUrl(repositoryUrl)
    console.log(repoUrl);
    
    
    if (!repoUrl) {
      this.msg = 'Invalid URL - must have the following format: https://github.com/OWNER/REPO-NAME"'
      setTimeout(() => {
        this.msg = ''
      }, 3000)
      return
    }
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