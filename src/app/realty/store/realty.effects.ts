import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as RealtyActions from './realty.actions';

import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ServerCommunicationService } from '../../server-communication.service';

@Injectable()
export class ParamsRealtyEffect {

  constructor(private actions$: Actions,
              private serverCommunication: ServerCommunicationService) { }

  @Effect() loadRealty = this.actions$
    .ofType(RealtyActions.CONFIG_PARAMS)
    .concatMap(() => this.serverCommunication.fetching()
      .pipe(
        map((response: any) => new RealtyActions.GetRealty(response.property)),
        catchError((error) => of(error))
      )
    );
}
