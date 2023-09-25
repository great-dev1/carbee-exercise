// authActions.ts

import { Action } from 'redux';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

interface LoginSuccessAction extends Action<typeof LOGIN_SUCCESS> {
  payload: { token: string | null };
}

interface LogoutSuccessAction extends Action<typeof LOGOUT_SUCCESS> {}

export type AuthAction = LoginSuccessAction | LogoutSuccessAction;

export const loginAction = (token: string | null): AuthAction => {
  return {
    type: LOGIN_SUCCESS,
    payload: { token },
  };
};

export const logoutAction = (): AuthAction => {
  // Perform logout logic here (e.g., API call)
  // Return an action to reset the user state
  return {
    type: LOGOUT_SUCCESS,
  };
};
