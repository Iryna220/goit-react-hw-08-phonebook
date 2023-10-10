import { Link } from 'react-router-dom';
import useAuth from 'service/api/hooks/useAuth';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import { FcIphone } from 'react-icons/fc';
import styles from './Navigation.module.css';

const Navigation = () => {
  const isLogin = useAuth();
  return (
    <nav className={styles.wrapper}>
      <Link className={styles.logo} to="/">
        <FcIphone /> Phonebook
      </Link>
      {isLogin && <NavbarMenu />}
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </nav>
  );
};

export default Navigation;
