import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';

import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ServerCommunicationService } from '../../server-communication.service';
import { TRYSIGN } from './auth.actions';

@Injectable()
export class ParamsRealtyEffect {

  constructor(private actions$: Actions,
              private serverCommunication: ServerCommunicationService) { }

  @Effect() loadRealty = this.actions$
    .ofType(AuthActions.TRYSIGN)
    .switchMap((action: AuthActions.OnSign) => {
      return this.serverCommunication.sign(action.payload);
    });
    // .switchMap((AuthData: {email: string, password: string}) => {
    //   return this.serverCommunication.sign(AuthData);
    // })
    // .mergeMap((token: string) => [new AuthActions.OnSighSuccess(token)]);
}
