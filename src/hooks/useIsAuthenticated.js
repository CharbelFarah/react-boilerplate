import { useSelector } from 'react-redux';

const useIsAuthenticated = () => {
  const { isAuthenticated } = useSelector((state) => state.authentication);

  return isAuthenticated;
};

export default useIsAuthenticated;
