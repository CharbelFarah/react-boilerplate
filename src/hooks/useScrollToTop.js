import { useEffect } from 'react';
import history from 'utils/history';

const useScrollToTop = () => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return unlisten;
  }, []);
};

export default useScrollToTop;
