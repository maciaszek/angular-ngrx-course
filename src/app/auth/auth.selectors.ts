import {createSelector} from '@ngrx/store';
import { AppState } from '../reducers';


export const selectAuthState = (state: AppState) => state.auth;


export const isLoggedIn = createSelector(
  selectAuthState,
  auth => auth.loggedIn
);


export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
