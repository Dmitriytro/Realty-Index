import { Action } from '@ngrx/store';

export const TRYSIGN = 'try_sign';
export const SIGNSUCCESS = 'sign_success';
export const SIGNERROR = 'sign_error';

// export const TRYSIGNUP = 'try_sign_up';
// export const SIGNUPSUCCESS = 'sign_up_success';
// export const SIGNUPERROR = 'sign_up_error';

export const SIGNOUT = 'sign_out';

export class OnSign implements Action {
  readonly type = TRYSIGN;
  constructor(public payload: {email: string, password: string}) {}
}

export class OnSighSuccess implements Action {
  readonly type = SIGNSUCCESS;
  constructor(public payload: string) {}
}

export class OnSighERROR implements Action {
  readonly type = SIGNERROR;
  constructor(public payload: string) {}
}

export class OnSighOut implements Action {
  readonly type = SIGNOUT;
  constructor() {}
}

export type Actions
  = OnSign
  | OnSighSuccess
  | OnSighERROR
  | OnSighOut;
