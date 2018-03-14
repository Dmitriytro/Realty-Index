import { Action } from '@ngrx/store';
import { Params } from "../params.model";
import { Realty } from "../realty.model";

export const CONFIG_PARAMS = 'config_params';
export const GET_REALTY = 'get_realty';
export const SELECT_PROPERTY = 'select_property';

export class SetParams implements Action {
  readonly type: string = CONFIG_PARAMS;
  constructor(public payload: Params) {}
}

export class Select implements Action {
  readonly type: string = SELECT_PROPERTY;
  constructor(public payload: any) {}
}

export class GetRealty implements Action {
  readonly type: string = GET_REALTY;
  constructor(public payload: Realty[]) {}
}

export type Actions
  = Select
  | SetParams
  | GetRealty;
