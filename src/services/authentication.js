import publicHttpClient from 'utils/httpClient';
import { loginApi, signupApi } from 'utils/api';
import * as sha256 from 'sha256';

const login = async (email, password) => {
  try {
    const body = {
      email,
      password: sha256(password)
    };

    const { data } = await publicHttpClient.post(loginApi, body);

    return data;
  } catch (e) {
    throw e.response;
  }
};

const signUp = async (name, email, password) => {
  try {
    const body = {
      name,
      email,
      password: sha256(password)
    };

    const { data } = await publicHttpClient.post(signupApi, body);
    return data;
  } catch (e) {
    throw e.response;
  }
};

export { login, signUp };
