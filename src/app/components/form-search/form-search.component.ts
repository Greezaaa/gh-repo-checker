import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Router } from '@angular/router'
import { receiveData, receiveIssues, setIssuesPage, setUrl } from 'src/app/store/actions/repository.action'
import { AppStore } from 'src/app/store/app.states'
import { RepositoryService } from '../../services/repository.service'
const ISSUES_PER_PAGE = 5
const actualPage = 1
@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
})
export class FormSearchComponent {
  searchedUrl: string = "https://github.com/facebook/react"
  constructor(
    private router: Router,
    private readonly repositoriesStore: Store<AppStore>,
    private readonly repositoryService: RepositoryService
  ) { }

  async getRepository(repositoryUrl: string):Promise<void>{
    this.repositoriesStore.dispatch(setUrl({ url: repositoryUrl }))

    const { owner, repo } = this.repositoryService.getRepoDataFromUrl(repositoryUrl)
    this.repositoryService.fetchRepository(owner, repo, (repository) => {
      const issuesLastPage = Math.ceil(repository.issuesCount / ISSUES_PER_PAGE)
      const page = actualPage
      this.repositoriesStore.dispatch(receiveData({ repository, issuesLastPage, page }))
    })

    this.repositoryService.fetchIssues(owner, repo, actualPage, (issues) => {
      this.repositoriesStore.dispatch(receiveIssues ({ issues }))
    })
    
   

    this.searchedUrl = ""
    await this.router.navigate(['/results'])
  }
}