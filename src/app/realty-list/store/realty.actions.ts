import { Action } from '@ngrx/store';
import {Params} from "../params.model";
export const CONFIG_PARAMS_WITH_REQUEST = 'config_params_with_request';

export class getRealty implements Action{
  readonly type: string = CONFIG_PARAMS_WITH_REQUEST;
  constructor(public payload: Params){}
}

export type RealtyActions = getRealty;
