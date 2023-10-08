import useForm from 'service/api/hooks/useForm';
import { initialState } from './initialState';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;
  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          User email:
        </label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          User password:
        </label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          className={styles.input}
          required
        />
      </div>
      <div>
        <button className={styles.button} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
