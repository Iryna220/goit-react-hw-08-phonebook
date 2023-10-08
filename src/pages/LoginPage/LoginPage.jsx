import { useDispatch, useSelector } from 'react-redux';
import { getAuthError } from 'redux/auth/authSelectors';
import { login } from 'redux/auth/authOperations';

import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className={styles.pageContainer}>
      <h2>Login</h2>
      <LoginForm onSubmit={onLogin} />
      {status && <p style={{ color: 'red' }}>Incorrect login or password</p>}
    </div>
  );
};

export default LoginPage;
