import { useRef } from 'react';
import config from 'utils/config';

const { isLocalEnv } = config;

const useCountRenders = (component = '') => {
  const renders = useRef(0);

  if (!isLocalEnv) return;
  // eslint-disable-next-line no-console,no-plusplus
  console.log(component, 'renders: ', renders.current++);
};

export default useCountRenders;
