import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';
import { FiLogOut } from 'react-icons/fi';
import styles from './NavbarUser.module.css';

const NavbarUser = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.navUser}>
      <span className={styles.nameUser}>{email}</span>
      <button className={styles.button} onClick={onLogout} type="button">
        Log out <FiLogOut />
      </button>
    </div>
  );
};

export default NavbarUser;
