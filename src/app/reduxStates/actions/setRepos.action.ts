import { createAction, props } from "@ngrx/store";
import { Repo } from 'src/app/intefaces/searchedRepos.inteface';

export const setRepos = createAction(
  '[Repos] Set Repos',props<{ repos: Array<Repo> }>()
  );