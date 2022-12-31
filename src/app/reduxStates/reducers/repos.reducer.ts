import { createReducer, on } from '@ngrx/store';
import {setRepos} from '../actions/setRepos.action';
import { Repo } from 'src/app/intefaces/searchedRepos.inteface';


export const initialState: Array<Repo> = []
export const reposReducer = createReducer(
  initialState,
  on(setRepos, (state, { repos }) => repos)
);