import { useNavigate } from "react-router-dom";
import { useAppSelector } from "./useAppSelector";



export function useAuthCheck() {
   const navigate = useNavigate();

   const {
      isAuth
   } = useAppSelector(state => state.auth);


   if (!isAuth) {
      navigate('/login');
   }
}