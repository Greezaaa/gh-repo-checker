import { RepositoryState, repositoryReducer } from './repository.reducer'
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
    const newState = repositoryReducer(initialState, action)

    expect(newState).toEqual({
      ...initialState,
      ok: true
    })
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
    const newState = repositoryReducer(initialState, action)

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
      name: 'repoName',
      description: 'description',
      created_at: '12-12-2022',
      git_url: 'https://github.com/ownerName/repoName',
      homepage: 'https://ownerName/repoName.com',
      language: 'english',
      visibility: 'open',
      private: false,
      full_name: 'ownerName/repoName',
      issuesCount: 14,
      owner: {
        id: 1,
        login: 'ownerName',
        avatar_url: 'https://imgbank.com/ownerName'
      }
    }
    const issuesLastPage = 3
    const page = 1
    const action = receiveData({ repository, issuesLastPage, page })
    const newState = repositoryReducer(initialState, action)

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
        body: 'description text here',
        title: 'title test1',
        author_association: 'author',
        state: 'stateTest1',
        locked: false,
        comments: 12,
        created_at: '21-11-2020',
        user: {
          id: 123,
          avatar_url: 'ownerAvatarUrl',
          login: 'ownerTest1',
          type: 'author',
          site_admin: false,
          html_url: 'https://ownerTest1.com'
        },
        expanded: false
      },
      {
        id: 120,
        labels: [],
        body: 'description text here',
        title: 'title test2',
        author_association: 'author',
        state: 'stateTest2',
        locked: false,
        comments: 12,
        created_at: '21-11-2020',
        user: {
          id: 123,
          avatar_url: 'ownerAvatarUrlTest2',
          login: 'ownerTest2',
          type: 'admin',
          site_admin: false,
          html_url: 'https://ownerTest2.com'
        },
        expanded: false
      }

    ]
    const action = receiveIssues({ issues })
    const newState = repositoryReducer(initialState, action)

    expect(newState.issues.isLoading).toBeFalsy()
    expect(newState.issues.list).toEqual(issues)
  })
})
