import { Issue } from './issue.interface';

export interface RepoData {
    id: number
    name: string
    issuesCount: number
    owner: {
      id: number
      login: string
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

  export interface RepositoryResponse {
    id: number
    name: string
    owner: {
      id: number
      login: string
      avatar_url: string
    }
    open_issues_count: number
  }
