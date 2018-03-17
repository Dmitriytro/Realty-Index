import {ActionReducerMap} from "@ngrx/store";
import * as realty from "../realty-list/store/realty.reducer";

export interface AppState {
  realtyReducer: realty.State
}

export const reducers: ActionReducerMap<AppState> = {
  realtyReducer: realty.realtyReducer
};
