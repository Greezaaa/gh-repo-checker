import { RepositoryReducer, RepositoryState } from './reducers/repository.reducer';

export interface AppStore {
    repository: RepositoryState
  }

export const reducers = {
  repository: RepositoryReducer
};