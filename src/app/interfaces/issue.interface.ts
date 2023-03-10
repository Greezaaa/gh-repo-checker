export interface Label {
  name: string
  color: string
}
export interface Issue {
  id: number
  labels: Label[]
  body: string
  title: string
  author_association: string
  state: string
  locked: boolean
  comments: number
  created_at: string
  user: {
    id: number
    avatar_url: string
    login: string
    type: string
    site_admin: boolean
    html_url: string
  }
  expanded: boolean
}

export type IssuesList = Issue[]

export type IssuesResponse = Issue[]
