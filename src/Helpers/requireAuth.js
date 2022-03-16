import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children, redirectTo }) => {
  // const isLogin = useSelector()

  return isLogin ? children : <Navigate to={redirectTo} />;
};
