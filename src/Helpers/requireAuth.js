import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAuthSelector } from '../store/selectors/authSelector';

export const RequireAuth = ({ children, redirectTo }) => {
  const isLogin = useSelector(isAuthSelector);

  return isLogin ? children : <Navigate to={redirectTo} />;
};
