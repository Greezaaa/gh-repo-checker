import { RepositoryReducer, RepositoryState } from './reducers/repository.reducer'
import { IssuesList } from '../interfaces/issue.interface'

export interface AppStore {
  issues: IssuesList
  repository: RepositoryState
}

export const reducers = {
  repository: RepositoryReducer
}
