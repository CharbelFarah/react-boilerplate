import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { refreshTokenApi } from 'utils/api';

export const refreshTokenLogic = (client) => {
  const body = {
    refresh_token: ''
  };
  return client.post(refreshTokenApi, body);
};

export const createRefreshToken = (client) => {
  return createAuthRefreshInterceptor(client, () => refreshTokenLogic(client), {
    pauseInstanceWhileRefreshing: true,
    statusCodes: [401]
  });
};
