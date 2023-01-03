import { Issue } from './issue.interface'

export interface RepoData {
    id: number
    name: string
    issuesCount: number
    owner: {
      id: number
      name: string
      avatar: string
    }
  }
  

  export interface RepositoryState {
    url: string
    data: RepoData | null
    isLoading: boolean
    issues: {
      isLoading: boolean
      list: Issue[]
      page: number
      lastPage: number
    }
  }
