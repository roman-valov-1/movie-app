import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import styles from './Registration.module.css';

function Registration() {
  return (
    <div className="container">
      <section className={styles['registration-page']}>
        <h1 className="h1">Sign up to Movie App</h1>
        <form action="" className={styles['registration-form']}>
          <div>
            <span className={styles['registration-form__input-title']}>LOGIN:</span>
            <TextInput
              type={'text'}
              placeholder={'Enter your login'}
            />
          </div>
          <div>
            <span className={styles['registration-form__input-title']}>EMAIL:</span>
            <TextInput
              type={'text'}
              placeholder={'Enter your email'}
            />
          </div>
          <div>
            <span className={styles['Registration-form__input-title']}>PASSWORD:</span>
            <TextInput
              type={'password'}
              placeholder={'Enter your password'}
            />
          </div>
          <Button style={{ width: "100%" }}>
            Sign up
          </Button>
        </form>
        <NavLink to='/login' className={styles['registration-form__link']}>
          Already have an account? Sign in!
        </NavLink>
      </section>
    </div>
  )
}

export default Registration;