import * as Actions from "./realty.actions";
import {Params} from "../params.model";
import {InitialState} from "./initialState.model";

const initialState = new InitialState(new Params( `97219`,'TOWNHOUSE/ROWHOUSE','assdttlvalue','1','10'));

export function realtyReducer(state = initialState, action: Actions.RealtyActions) {
  switch (action.type) {
    case Actions.CONFIG_PARAMS:
      return {...state, params: {...state.params, ...action.payload}};
    case Actions.GET_REALTY:
      return {...state, realtyList: action.payload};
    default: return state
  }
}

export interface RealtyState {
  realtyReducer: InitialState
}
