import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { RepoData, RepositoryResponse } from '../interfaces/repo.interface'
import { Issue, IssuesList } from '../interfaces/issue.interface'

const ROOT_API_URL = 'https://api.github.com/'

type IssuesResponse = Array<Issue>
@Injectable({
  providedIn: 'root'
})

export class RepositoryService {

  constructor(
    private readonly http: HttpClient
  ) { }

  fetchRepository(
    owner: string,
    repo: string,
    onSuccess: (data: RepoData) => void): void {
    const url = `${ROOT_API_URL}repos/${owner}/${repo}`
    // const url = `${ROOT_API_URL}search/repositories?q=${owner}/${repo}`

    console.log(url)

    this.http.get<RepositoryResponse>(url, {

      // TODO: add header with token if needed
      // headers: {
      //   Authorization: 'Bearer ' + GITHUB_TOKEN
      // }
    }).subscribe((data): void => {
      console.log(data)

      const repository = {
        id: data.id,
        name: data.name,
        issuesCount: data.open_issues_count,
        owner: {
          id: data.owner.id,
          login: data.owner.login,
          avatar: data.owner.avatar_url
        }
      }
      onSuccess(repository)
      console.log(repository)
    })
  }

  fetchIssues(
    owner: string,
    repo: string,
    page: number,
    onSuccess: (issues: IssuesList) => void
  ): void {
    const url = `${ROOT_API_URL}repos/${owner}/${repo}/issues?page=${page}`
    this.http.get<IssuesResponse>(url, {
      // TODO: add header with token if needed
      // headers: {
      //   Authorization: 'Bearer ' + GITHUB_TOKEN
      // }
    }).subscribe((data): void => {
      onSuccess(data)
    })
  }
}
