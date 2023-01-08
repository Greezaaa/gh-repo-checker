import { Issue } from './issue.interface'

export interface RepoData {
  id: number
  name: string
  description: string
  created_at: string
  git_url: string
  homepage: string
  language: string
  visibility: string
  private: boolean
  full_name: string
  issuesCount: number
  owner: {
    id: number
    login: string
    avatar_url: string
  }

}

export interface RepositoryState {
  url: string
  data: RepoData | null
  isLoading: boolean
  ok: boolean
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
  description: string
  created_at: string
  git_url: string
  homepage: string
  language: string
  visibility: string
  private: boolean
  full_name: string
  owner: {
    id: number
    login: string
    avatar_url: string
  }

  open_issues_count: number
}
