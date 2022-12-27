import { createAction, props } from "@ngrx/store";
import { Repo } from "src/app/intefaces/issues.inteface";

export const setRepos = createAction(
    '[Repos] Set Repos',
    props<{ repos: Array<Repo> }>()
  );