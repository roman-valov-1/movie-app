import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { authActions } from '../../store/reducers/auth.Slice';

function Header() {

   const auth = useSelector((s: RootState) => s.auth.isAuth);
   const dispatch = useDispatch<AppDispatch>();

   const logoutHandler = () => {
      dispatch(authActions.logout());
   }

   return (
      <header className={styles['header']}>
         <div className='container'>
            <div className={styles['header__flex-container']}>
               <NavLink to="/" className={styles['header__link']}>
                  MOVIE APP
               </NavLink>
               <nav className={styles['navbar']}>
                  <NavLink to="/login" className={styles['header__link']}>
                     Log in
                  </NavLink>
                  <NavLink to="/registration" className={styles['header__link']}>
                     Sign in
                  </NavLink>
                  <NavLink to="/random-movie" className={styles['header__link']}>
                     Random movie
                  </NavLink>
                  <Button onClick={logoutHandler}>
                     Log out
                  </Button>
               </nav>
            </div>
         </div>
      </header>
   )
}

export default Header