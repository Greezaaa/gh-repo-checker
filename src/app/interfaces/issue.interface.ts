export interface Issue {
  id: number
  url: string
  body: string
  title: string
  author_association: string
  created_at:string

  user: {
    id: number
    avatar_url: string
    login: string
  }
  // TODO:
}

export type IssuesList = Array<Issue>

export type IssuesResponse = Array<Issue>
