import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from 'redux/auth/authSelectors';
import Loader from 'components/Loader/Loader';

const PrivatRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && !token) {
    return <Loader />;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivatRoute;
