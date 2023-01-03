import { RepositoryState } from "src/app/interfaces/repo"
import { createReducer, on } from '@ngrx/store';
import { setUrl, receiveData, receiveIssues, setIssuesPage } from "../actions/repository.action";

const initialState: RepositoryState = {
    url: '',
    data: null,
    isLoading: false,
    issues: {
        isLoading: false,
        list: [],
        page: 0,
        lastPage: 0
    }
}

export const RepositoryReducer = createReducer(
    initialState,
    on(setUrl, (state, { url }) => {
      return {
        ...state,
        url,
        isLoading: true
      }
    }),
    on(receiveData, (state, { repository, issuesLastPage }) => {
        return {
            ...state,
            isLoading: false,
            data: repository,
            issues: {
                isLoading: true,
                list: [],
                page: 0,
                lastPage: issuesLastPage
            }
        }
    }),
    on(receiveIssues, (state, { issues }) => ({
        ...state,
        issues: {
            ...state.issues,
            isLoading: false,
            list: issues
        }
    })),
    on(setIssuesPage, (state, { page }) => ({
        ...state,
        issues: {
            ...state.issues,
            isLoading: true,
            page
        }
    }))
)

export { RepositoryState };
