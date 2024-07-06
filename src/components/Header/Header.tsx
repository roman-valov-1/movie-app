import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../Button/Button';

function Header() {
   let auth = false;

   return (
      <header className={styles['header']}>
         <div className='container'>
            <div className={styles['header__flex-container']}>
               <NavLink to="/" className={styles['header__link']}>
                  MOVIE APP
               </NavLink>
               {!auth && <nav className={styles['navbar']}>
                  <NavLink to="/login" className={styles['header__link']}>
                     Log in
                  </NavLink>
                  <NavLink to="/registration" className={styles['header__link']}>
                     Sign in
                  </NavLink>
               </nav>}
               {auth && <div>
                  <NavLink to="/random-movie" className={styles['header__link']}>
                     Random movie
                  </NavLink>
                  <Button>
                     Log out
                  </Button>
               </div>}
            </div>
         </div>
      </header>
   )
}

export default Header