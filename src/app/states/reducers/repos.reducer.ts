import { createReducer, on } from '@ngrx/store';
import { setRepos } from '../actions/setRepos.action';
import { Repo } from 'src/app/intefaces/issues.inteface';


export const initialState: Array<Repo> = []

export const reposReducer = createReducer(
    initialState,
    on(setRepos, (state, action) => ({ ...state, repos: action.repos }))
  );