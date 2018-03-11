import * as RealtyActions from "./realty.actions";
import {Params} from "../params.model";

const initialParams = new Params( `97219`,'TOWNHOUSE/ROWHOUSE','assdttlvalue','1','10');


export function realtyReducer(state = initialParams, action: RealtyActions.getRealty) {
  switch (action.type) {
    case RealtyActions.CONFIG_PARAMS_WITH_REQUEST:
      return {...state, ...action.payload};
    default: return state
  }
}
