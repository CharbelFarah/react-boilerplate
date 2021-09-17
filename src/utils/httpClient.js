import axios from 'axios';
import config from './config';

const publicHttpClient = axios.create({
  baseURL: config.apiUrl,
  timeout: config.apiTimeout
});

export default publicHttpClient;
