import { clearAuthentication, saveAuthentication } from 'myStore/actions/authenticationActions';
import { refreshTokenApi, logoutApi } from 'utils/api';

const requestSuccessInterceptor = (store, req) => {
  // add authorization token here
  // req.headers.authorization = '';

  if (req.url === refreshTokenApi) {
    // add refresh token header here
    // req.headers.authorization = '';
    // add refresh access token here
    // req.data = '';
  }

  return req;
};

const responseSuccessInterceptor = (store, res) => {
  if (res.config.url === logoutApi) {
    // clear authentication reducer
    store.dispatch(clearAuthentication());
  }

  if (res.config.url === refreshTokenApi) {
    // if refresh token was fired and response 200, save new token in the reducer
    store.dispatch(saveAuthentication(res.data));
  }

  return Promise.resolve(res);
};

const responseErrorInterceptor = (store, res) => {
  if (res?.config?.url === refreshTokenApi) {
    // if refresh token was fired and error, clear authentication reducer (most likely refresh token expired)
    store.dispatch(clearAuthentication());
  }

  // can show notification here if you want

  return Promise.reject(res);
};

export { requestSuccessInterceptor, responseErrorInterceptor, responseSuccessInterceptor };
