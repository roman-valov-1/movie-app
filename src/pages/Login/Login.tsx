import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import styles from './Login.module.css';
import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { login } from "../../store/auth/login";

function Login() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    isLoading,
    isAuth,
    error
  } = useAppSelector(s => s.auth);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({email: email, password: password}))
  }

  useEffect(() => {
    if (isAuth) navigate('/');
  }, [isAuth])

  return (
    <div className="container">
      <section className={styles['login-page']}>
        <h1 className="h1">Sign in to Movie App</h1>
        <form className={styles['login-form']} onSubmit={submitHandler}>
          <div>
            <span className={styles['login-form__input-title']}>EMAIL:</span>
            <TextInput
              type={'email'}
              placeholder={'Enter your email'}
              name={'email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <span className={styles['login-form__input-title']}>PASSWORD:</span>
            <TextInput
              type={'password'}
              placeholder={'Enter your password'}
              name={'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isLoading && <div>Loading...</div>}
          {error && <div>{error}</div>}
          <Button style={{ width: "100%" }} styleType="normal">
            Sign in
          </Button>
        </form>
      </section>
    </div>
  )
}

export default Login;