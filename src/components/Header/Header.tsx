import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../Button/Button';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { authActions } from '../../store/auth/authSlice';

function Header() {

   const dispatch = useAppDispatch();
   const { isAuth, user } = useAppSelector(s => s.auth);

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
                  
                  <NavLink to="/random-movie" className={styles['header__link']}>
                     Random movie
                  </NavLink>
                  {user && <span>{user.name}</span>}
                  {isAuth && <Button onClick={logoutHandler}>
                     Log out
                  </Button>}
                  {!isAuth && <NavLink to="/login" className={styles['header__link']}>
                     Log in
                  </NavLink>}
               </nav>
            </div>
         </div>
      </header>
   )
}

export default Header