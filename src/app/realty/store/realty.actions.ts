import { Action } from '@ngrx/store';
import { Params } from '../realty-list/params.model';
import { Realty } from '../realty-list/realty.model';

export const CONFIG_PARAMS = 'config_params';
export const GET_REALTY = 'get_realty';
export const SELECT_PROPERTY = 'select_property';

export class SetParams implements Action {
  readonly type = CONFIG_PARAMS;
  constructor(public payload: Params) {}
}

export class Select implements Action {
  readonly type = SELECT_PROPERTY;
  constructor(public payload: number) {}
}

export class GetRealty implements Action {
  readonly type = GET_REALTY;
  constructor(public payload: Realty[]) {}
}

export type Actions
  = GetRealty
  | SetParams
  | Select;
