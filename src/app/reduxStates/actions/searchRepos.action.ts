import { createAction, props } from "@ngrx/store";
import { Repo } from "src/app/intefaces/issues.inteface";

export const searchRepos = createAction(
  '[Repos] Set Repos',props<{ repositorios: Array<Repo> }>()
  );