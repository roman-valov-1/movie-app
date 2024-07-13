import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from './MainLayout.module.css';

function MainLayout() {
   
   return (
      <>
         <Header />
         <div className={styles['content']}>
            <Outlet />
         </div>
      </>
   )
}

export default MainLayout;