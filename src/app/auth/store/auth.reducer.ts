import * as AuthActions from './auth.actions';

export interface State {
  token: string;
  isAuthenticated: boolean;
}

const initialState: State = {
  token: null,
  isAuthenticated: false
};

export function authReducer(state = initialState, action: AuthActions.Actions) {
  switch (action.type) {
    case AuthActions.TRYSIGN:
      return {...state};
    case AuthActions.SIGNSUCCESS:
      return {...state};
    case AuthActions.SIGNERROR:
      return {...state};
    default: return state;
  }
}
