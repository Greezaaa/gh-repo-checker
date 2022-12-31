import { createReducer, on } from '@ngrx/store';
import { setSearchedValue } from '../actions/searchedValue.action';


export const initialState: string = ""
export const searchedValueReducer = createReducer(
  initialState,
  on( setSearchedValue, (state, { searchedValue }) => searchedValue)
);