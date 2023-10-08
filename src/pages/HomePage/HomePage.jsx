import 'animate.css';
import Telephone from '../HomePage/Images/train-track.jpg';
import { NavLink } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <main>
      <section className={styles.container}>
        <div class="animate__animated animate__backInUp">
          <h1 data-text="My contacts">My contacts</h1>
        </div>

        <div className={styles.thumb}>
          <div>
            <img className={styles.images} src={Telephone} alt="" />
          </div>
        </div>
        <NavLink to="/contacts" className={styles.button} title="Try it now!">
          Try it now!
        </NavLink>
      </section>
    </main>
  );
};

export default HomePage;
