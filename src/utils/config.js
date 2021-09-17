const local = 'LOCAL';
const dev = 'DEV';

const config = {
  env: process.env.REACT_APP_ENV,
  environments: {
    local,
    dev,
    uat: 'UAT',
    prod: 'PROD'
  },
  isLocalEnv: process.env.REACT_APP_ENV === local,
  isDevEnv: process.env.REACT_APP_ENV === dev,
  apiUrl: process.env.REACT_APP_API_URL,
  apiTimeout: process.env.REACT_APP_API_TIMEOUT
};

export default config;
