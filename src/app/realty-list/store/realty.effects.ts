import {Injectable} from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import * as RealtyActions from "./realty.actions";
import {Observable} from "rxjs/Observable";
@Injectable()
export class RealtyDataService {
  // responceData: Observable<object>;
  constructor(private actions$: Actions) { }
  // responceData = this.actions$.ofType(RealtyActions.CONFIG_PARAMS_WITH_REQUEST)
}
