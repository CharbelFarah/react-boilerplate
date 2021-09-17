import {
  CLEAR_AUTHENTICATION,
  SAVE_AUTHENTICATION,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from 'myStore/constants/authenticationConstants';

const initialState = {
  access_token: undefined,
  refresh_token: undefined,
  refresh_token_header: undefined,
  isAuthenticated: false,
  logout: {
    loading: false,
    error: null,
    result: null
  }
};

const authUserReducer = (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case SAVE_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: true,
        ...payload
      };
    case CLEAR_AUTHENTICATION: {
      return { ...initialState, logout: { ...state.logout } };
    }
    case LOGOUT:
      return { ...state, logout: { loading: true, error: null, result: null } };
    case LOGOUT_SUCCESS:
      return { ...state, logout: { loading: false, error: null, result: payload.result } };
    case LOGOUT_FAIL:
      return { ...state, logout: { loading: false, error, result: null } };
    default:
      return state;
  }
};

export default authUserReducer;
