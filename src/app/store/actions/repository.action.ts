import { createAction, props } from '@ngrx/store'
import { RepoData } from '../../interfaces/repo.interface'
import { IssuesList } from '../../interfaces/issue.interface'


export const setUrl = createAction(
    '[Repository] Set url', props<{
        url: string
    }>()
)

export const receiveData = createAction(
    '[Repository] Receive data', props<{
        repository: RepoData
        issuesLastPage: number
        page: number
    }>()
)

export const receiveIssues = createAction(
    '[Repository] Receive issues', props<{
        issues: IssuesList
    }>()
)

export const setIssuesPage = createAction(
    '[Repository] Set issues page', props<{
        page: number
    }>()
)