import { RepositoryReducer, RepositoryState } from './repository.reducer'
import { errorCheck, setUrl, receiveData, receiveIssues } from '../actions/repository.action'
import { Issue } from 'src/app/interfaces/issue.interface'

describe('RepositoryReducer', () => {
  it('should handle the errorCheck action', () => {
    const initialState: RepositoryState = {
      url: '',
      data: null,
      isLoading: false,
      ok: false,
      issues: {
        isLoading: false,
        list: [],
        page: 0,
        lastPage: 0
      }
    }
    const ok = true
    const action = errorCheck({ ok })
    const newState = RepositoryReducer(initialState, action)

    expect(newState.ok).toEqual(ok)
  })

  it('should handle the setUrl action', () => {
    const initialState: RepositoryState = {
      url: '',
      data: null,
      isLoading: false,
      ok: true,
      issues: {
        isLoading: false,
        list: [],
        page: 0,
        lastPage: 0
      }
    }
    const url = 'https://github.com/user/repo'
    const action = setUrl({ url })
    const newState = RepositoryReducer(initialState, action)

    expect(newState.url).toEqual(url)
    expect(newState.isLoading).toBeTruthy()
  })

  it('should handle the receiveData action', () => {
    const initialState: RepositoryState = {
      url: '',
      data: null,
      isLoading: true,
      ok: true,
      issues: {
        isLoading: false,
        list: [],
        page: 0,
        lastPage: 0
      }
    }
    const repository = {
      id: 1,
      name: 'string',
      description: 'string',
      created_at: 'string',
      git_url: 'string',
      homepage: 'string',
      language: 'string',
      visibility: 'string',
      private: false,
      full_name: 'string',
      issuesCount: 14,
      owner: {
        id: 1,
        login: 'string',
        avatar_url: 'string'
      }
    }
    const issuesLastPage = 3
    const page = 1
    const action = receiveData({ repository, issuesLastPage, page })
    const newState = RepositoryReducer(initialState, action)

    expect(newState.isLoading).toBeFalsy()
    expect(newState.data).toEqual(repository)
    expect(newState.issues.isLoading).toBeTruthy()
    expect(newState.issues.page).toEqual(page)
    expect(newState.issues.lastPage).toEqual(issuesLastPage)
  })
  it('should handle the receiveIssues action', () => {
    const initialState: RepositoryState = {
      url: '',
      data: null,
      isLoading: false,
      ok: true,
      issues: {
        isLoading: true,
        list: [],
        page: 0,
        lastPage: 0
      }
    }
    const issues: Issue[] = [
      {
        id: 100,
        labels: [],
        body: 'string',
        title: 'string',
        author_association: 'string',
        state: 'string',
        locked: false,
        comments: 12,
        created_at: 'string',
        user: {
          id: 123,
          avatar_url: 'string',
          login: 'string',
          type: 'string',
          site_admin: false,
          html_url: 'string'
        },
        expanded: false
      },
      {
        id: 10230,
        labels: [],
        body: 'string',
        title: 'string',
        author_association: 'string',
        state: 'string',
        locked: false,
        comments: 12,
        created_at: 'string',
        user: {
          id: 123,
          avatar_url: 'string',
          login: 'string',
          type: 'string',
          site_admin: false,
          html_url: 'string'
        },
        expanded: false
      }

    ]
    const action = receiveIssues({ issues })
    const newState = RepositoryReducer(initialState, action)

    expect(newState.issues.isLoading).toBeFalsy()
    expect(newState.issues.list).toEqual(issues)
  })
})
