import { Action } from '@ngrx/store';
import {Params} from "../params.model";
import {Realty} from "../realty.model";

export const CONFIG_PARAMS = 'config_params';
export const GET_REALTY = 'get_realty';

export class setParams implements Action{
  readonly type: string = CONFIG_PARAMS;
  constructor(public payload: Params){}
}

export class getRealty implements Action{
  readonly type: string = GET_REALTY;
  constructor(public payload: Realty[]){}
}

export type RealtyActions = setParams | getRealty;
