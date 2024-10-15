import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../Button/Button';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { authActions } from '../../store/auth/authSlice';
import { useState } from 'react';
import cn from 'classnames';

function Header() {

   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const { isAuth, user } = useAppSelector(s => s.auth);

   const [menuIsActive, setMenuIsActive] = useState<boolean>(false);

   const logoutHandler = () => {
      dispatch(authActions.logout());
      navigate('/login');
   }

   return (
      <header className={styles['header']}>
         <div className='container'>
            <div className={styles['header__flex-container']}>
               <NavLink to="/" className={styles['header__logo']}>
                  MOVIE APP
               </NavLink>
               <button
                  className={cn(styles['header__burger'], {
                     [styles['header__burger_active']]: menuIsActive === true
                  })}
                  onClick={() => setMenuIsActive(s => !s)}>
                  <span></span>
               </button>
               <nav className={cn(styles['navbar'], {
                  [styles['navbar_active']]: menuIsActive === true
               })}>
                  {isAuth && <>
                     <NavLink to="/search-page" className={styles['header__link']}>
                        Search
                     </NavLink>
                     <NavLink to="/random-movie" className={styles['header__link']}>
                        Random movie
                     </NavLink>
                     <span>{user?.name}</span>
                     <Button onClick={logoutHandler}>
                        Log out
                     </Button>
                  </>
                  }
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