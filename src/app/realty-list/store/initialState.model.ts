import {Params} from "../params.model";
import {Realty} from "../realty.model";

export class InitialState {
  constructor(public params: Params){}
  public realtyList: Realty[] = [];
  public selected: Realty = null;
}
