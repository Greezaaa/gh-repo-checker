import { createReducer, on } from '@ngrx/store';
import { Repo } from 'src/app/intefaces/searchedRepos.inteface';
import { searchRepos } from '../actions/searchRepos.action';


export const initialState: Array<Repo> = []
export const reposReducer = createReducer(
  initialState,
  on(searchRepos, (state, { repositorios }) => repositorios)
);