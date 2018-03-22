import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private router: Router,
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
    .mergeMap((token: string) => {
      this.router.navigate(['/']);
      return [
        new AuthActions.OnSighSuccess(),
        new AuthActions.OnSetToken(token)
      ];
    });
  @Effect() onSignIn = this.actions$
    .ofType(AuthActions.TRYSIGNIN)
    .map((action: AuthActions.OnSignUp) => {
      return action.payload;
    })
    .switchMap((authData: {email: string, password: string}) => {
      return fromPromise(this.authService.signIn(authData));
    })
    .switchMap(() => {
      return fromPromise(this.authService.getToken());
    })
    .mergeMap((token: string) => {
      this.router.navigate(['/']);
      return [
        new AuthActions.OnSighSuccess(),
        new AuthActions.OnSetToken(token)
      ];
    });
  @Effect() onSignOut = this.actions$
    .ofType(AuthActions.SIGNOUT)
    .do(() => {
      this.router.navigate(['/']);
    });
}
