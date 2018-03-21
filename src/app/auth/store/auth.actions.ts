import { Action } from '@ngrx/store';

export const TRYSIGNIN = 'try_sign_in';
export const SIGNSUCCESS = 'sign_success';
export const SIGNINERROR = 'sign_error';

export const TRYSIGNUP = 'try_sign_up';
export const SIGNUPERROR = 'sign_up_error';

export const SIGNOUT = 'sign_out';
export const SETTOKEN = 'set_token';

export class OnSignIn implements Action {
  readonly type = TRYSIGNIN;
  constructor(public payload: {email: string, password: string}) {}
}

export class OnSignUp implements Action {
  readonly type = TRYSIGNUP;
  constructor(public payload: {email: string, password: string}) {}
}

export class OnSighSuccess implements Action {
  readonly type = SIGNSUCCESS;
}

export class OnSighInERROR implements Action {
  readonly type = SIGNINERROR;
  constructor(public payload: string) {}
}

export class OnSighUpERROR implements Action {
  readonly type = SIGNUPERROR;
  constructor(public payload: string) {}
}

export class OnSighOut implements Action {
  readonly type = SIGNOUT;
  constructor() {}
}

export class OnSetToken implements Action {
  readonly type = SETTOKEN;
  constructor(public payload: string) {}
}

export type Actions
  = OnSignIn
  | OnSignUp
  | OnSighSuccess
  | OnSighInERROR
  | OnSighUpERROR
  | OnSighOut
  | OnSetToken;
