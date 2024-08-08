import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from './MainLayout.module.css';

function MainLayout() {
   
   return (
      <>
         <Header />
         <main className={styles['content']}>
            <Outlet />
         </main>
      </>
   )
}

export default MainLayout;