import { createReducer, on } from '@ngrx/store';
import { setSearchedValue } from '../actions/searchedValue.action';


export const initialState = "";
export const searchedValueReducer = createReducer(
  initialState,
  on( setSearchedValue, (state, { searchedValue }) => searchedValue)
);