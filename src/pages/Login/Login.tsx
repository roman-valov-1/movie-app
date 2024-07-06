import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import styles from './Login.module.css';

function Login() {
  return (
    <div className="container">
      <section className={styles['login-page']}>
        <h1 className="h1">Sign in to Movie App</h1>
        <form action="" className={styles['login-form']}>
          <div>
            <span className={styles['login-form__input-title']}>LOGIN:</span>
            <TextInput
              type={'text'}
              placeholder={'Enter your login'}
            />
          </div>

          <div>
            <span className={styles['login-form__input-title']}>PASSWORD:</span>
            <TextInput
              type={'password'}
              placeholder={'Enter your password'}
            />
          </div>
          <Button style={{ width: "100%" }}>
            Sign in
          </Button>
        </form>
        <NavLink to='/registration' className={styles['login-form__link']}>
          Haven't account? Sign up!
        </NavLink>
      </section>
    </div>
  )
}

export default Login;