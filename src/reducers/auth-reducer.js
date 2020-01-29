import { LOGOUT_SUCCESSFUL, NEW_G_USER } from '../actions/authenticate';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: true,
  isNewUser: false,
  user: null,
  errors: {},
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOADING':
      return { ...state, isLoading: true };

    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.user,
        isNewUser: false,
      };

    case 'LOGIN_SUCCESSFUL':
      localStorage.setItem('token', action.data.token);
      return {
        ...state,
        ...action.data,
        isAuthenticated: true,
        isLoading: false,
        errors: null,
        isNewUser: false,
      };

    case 'AUTHENTICATION_ERROR':
    case 'LOGIN_FAILED':
    case LOGOUT_SUCCESSFUL:
      localStorage.removeItem('token');
      if (action && action.data && action.data.auth2 != null) {
        action.data.auth2.signOut().then(function() {});
      }
      return {
        ...state,
        errors: action.data,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        isNewUser: false,
      };
    case NEW_G_USER:
      return {
        ...state,
        isLoading: false,
        isNewUser: true,
      };

    default:
      return state;
  }
}
