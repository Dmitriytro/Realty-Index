import * as RealtyActions from './realty.actions';
import { Params } from '../realty-list/params.model';
import { Realty } from '../realty-list/realty.model';

export interface State {
  params: Params;
  realtyList: Realty[];
  selected: Realty;
}

const initialState: State = {
  params: new Params(`97219`, 'TOWNHOUSE/ROWHOUSE', 'assdttlvalue', '1', '10'),
  realtyList: [],
  selected: null
};

export function realtyReducer(state = initialState, action: RealtyActions.Actions) {
  switch (action.type) {
    case RealtyActions.SELECT_PROPERTY:
      return {...state, selected: state.realtyList[action.payload]};
    case RealtyActions.CONFIG_PARAMS:
      return {...state, params: {...state.params, ...action.payload}};
    case RealtyActions.GET_REALTY:
      return {...state, realtyList: [...action.payload]};
    default: return state;
  }
}
