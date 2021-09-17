import {
  SAVE_AUTHENTICATION,
  CLEAR_AUTHENTICATION,
  LOGOUT
} from 'myStore/constants/authenticationConstants';
import { logoutApi } from 'utils/api';

export const logoutUser = () => ({
  type: LOGOUT,
  payload: {
    request: {
      url: logoutApi,
      method: 'put'
    }
  }
});

export const saveAuthentication = (payload) => ({
  type: SAVE_AUTHENTICATION,
  payload
});

export const clearAuthentication = () => ({
  type: CLEAR_AUTHENTICATION,
  payload: null
});
