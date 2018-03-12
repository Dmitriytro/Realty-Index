import {Params} from "../params.model";
import {Realty} from "../realty.model";

export class InitialState {
  constructor(public params: Params){}
  realtyList: Realty[] = [];
}
