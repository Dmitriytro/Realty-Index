import { ActionReducerMap } from '@ngrx/store';
import * as realty from '../realty/store/realty.reducer';
import * as auth from '../auth/store/auth.reducer';

export interface AppState {
  realtyReducer: realty.State;
  authReducer: auth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  realtyReducer: realty.realtyReducer,
  authReducer: auth.authReducer
};
