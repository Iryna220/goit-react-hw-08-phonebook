import { NavLink } from 'react-router-dom';
import styles from './NavbarAuth.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

const NavbarAuth = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink className={getClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={getClassName} to="/login">
        Login{' '}
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
