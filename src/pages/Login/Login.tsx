import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import styles from './Login.module.css';
import { BaseSyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { authActions } from "../../store/reducers/auth.Slice";

function Login() {

  const dispatch = useDispatch<AppDispatch>();
  const login = useSelector((s: RootState) => s.auth.login);
  const password = useSelector((s: RootState) => s.auth.password);
  const navigate = useNavigate();

  const loginFormHandler = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    if(formData.login === login && formData.password === password) {
      dispatch(authActions.login());
      e.target.reset();
      navigate('/');
    } 
  }

  return (
    <div className="container">
      <section className={styles['login-page']}>
        <h1 className="h1">Sign in to Movie App</h1>
        <form className={styles['login-form']} onSubmit={loginFormHandler}>
          <div>
            <span className={styles['login-form__input-title']}>LOGIN:</span>
            <TextInput
              type={'text'}
              placeholder={'Enter your login'}
              name={'login'}
            />
          </div>

          <div>
            <span className={styles['login-form__input-title']}>PASSWORD:</span>
            <TextInput
              type={'password'}
              placeholder={'Enter your password'}
              name={'password'}
            />
          </div>
          <Button style={{ width: "100%" }} styleType="normal">
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