import * as RealtyActions from "./realty.actions";
import {Params} from "../params.model";
import {InitialState} from "./initialState.model";

const initialState: InitialState = new InitialState(new Params( `97219`,'TOWNHOUSE/ROWHOUSE','assdttlvalue','1','10'));

export function realtyReducer(state = initialState, action: RealtyActions.Actions): InitialState {
  switch (action.type) {
    case RealtyActions.SELECT_PROPERTY:
      return {...state, selected: state.realtyList[action.payload]};
    case RealtyActions.CONFIG_PARAMS:
      return {...state, params: {...state.params, ...action.payload}};
    case RealtyActions.GET_REALTY:
      return {...state, realtyList: [...action.payload]};
    default: return state
  }
}

export interface RealtyState {
  realtyReducer: InitialState
}
