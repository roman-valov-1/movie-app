import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
   let auth = false;

   return (
      <header className={styles['header']}>
         <div className='container'>
            <div className={styles['header__flex-container']}>
               <NavLink to="/" className={styles['logo']}>MOVIE APP</NavLink>
               {!auth && <nav className={styles['navbar']}>
                  <NavLink to="/login" >Log in</NavLink>
                  <NavLink to="/registration">Sign in</NavLink>
               </nav>}
               {auth && <div>
                  <NavLink to="/random-movie">Random movie</NavLink>
                  <button>Log out</button>
               </div>}
            </div>
         </div>
      </header>
   )
}

export default Header