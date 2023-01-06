import { SafeHtml } from "@angular/platform-browser"

export interface Issue {
  id: number
  html_url: string
  body: SafeHtml
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
  }
}

export type IssuesList = Array<Issue>

export type IssuesResponse = Array<Issue>
