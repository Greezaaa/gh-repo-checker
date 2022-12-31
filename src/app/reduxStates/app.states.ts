import { reposReducer } from './reducers/repos.reducer'; 
import { searchedValueReducer } from './reducers/searchedValue.reducer';


export const reducers={

    reposState:reposReducer,
    searchState: searchedValueReducer
}