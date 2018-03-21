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
    case AuthActions.TRYSIGNIN:
      return {...state};
    case AuthActions.TRYSIGNUP:
      return {...state};
    case AuthActions.SIGNSUCCESS:
      return {...state, isAuthenticated: true};
    case AuthActions.SIGNINERROR:
      return {...state};
    case AuthActions.SIGNUPERROR:
      return {...state};
    case AuthActions.SIGNOUT:
      return {...state};
    case AuthActions.SETTOKEN:
      console.log(action.payload);
      return {...state, token: action.payload};
    default: return state;
  }
}
