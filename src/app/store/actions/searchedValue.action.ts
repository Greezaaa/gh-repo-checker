import { createAction, props } from "@ngrx/store";

export const setSearchedValue = createAction(
  '[Search] Set Searched Value',props<{ searchedValue: string }>()
  );