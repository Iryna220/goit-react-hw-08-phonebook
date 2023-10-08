import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { signup } from 'redux/auth/authOperations';
import { getAuthError } from 'redux/auth/authSelectors';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <div className={styles.pageContainer}>
      <h2>Create your accaunt</h2>
      <RegisterForm onSubmit={onRegister} />
      {status && (
        <p style={{ color: 'red' }}>This user is already registered</p>
      )}
    </div>
  );
};

export default RegisterPage;
