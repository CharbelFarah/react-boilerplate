import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import config from 'utils/config';
import { createRefreshToken } from './refreshToken';
import {
  requestSuccessInterceptor,
  responseSuccessInterceptor,
  responseErrorInterceptor
} from './interceptors';

export const appClient = axios.create({
  baseURL: config.apiUrl,
  timeout: config.apiTimeout
});

createRefreshToken(appClient);

const middlewareConfig = {
  interceptors: {
    request: [
      {
        success(store, req) {
          return requestSuccessInterceptor(store, req);
        }
      }
    ],
    response: [
      {
        success(store, res) {
          return responseSuccessInterceptor(store, res);
        },
        error(store, res) {
          return responseErrorInterceptor(store, res);
        }
      }
    ]
  }
};

export default axiosMiddleware(appClient, middlewareConfig);
