import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { AuthService } from '../auth.service';

import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private authService: AuthService) { }

  @Effect() onSignUp = this.actions$
    .ofType(AuthActions.TRYSIGNUP)
    .map((action: AuthActions.OnSignUp) => {
      return action.payload;
    })
    .switchMap((authData: {email: string, password: string}) => {
      return fromPromise(this.authService.signUp(authData));
    })
    .switchMap(() => {
      return fromPromise(this.authService.getToken());
    })
    .mergeMap((token: string) => [
      new AuthActions.OnSighSuccess(),
      new AuthActions.OnSetToken(token)
    ]);
    // .catch((error: any) => console.log(error));
    // .map((data) => console.log(data));
    // .switchMap((AuthData: {email: string, password: string}) => {
    //   return this.serverCommunication.sign(AuthData);
    // })
    // .mergeMap((token: string) => [new AuthActions.OnSighSuccess(token)]);
  @Effect({dispatch: false}) onSignIn = this.actions$
    .ofType(AuthActions.TRYSIGNIN)
    .switchMap((action: AuthActions.OnSignIn) => {
      return fromPromise(this.authService.signIn(action.payload));
    })
    .map((data) => {
      console.log(data);
    });
    // .catch((error: any) => console.log(error));
}
