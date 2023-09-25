import { AuthAction, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '@/actions/auth';

interface AuthState {
  token: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  token: null,
  loading: true,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        loading: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
