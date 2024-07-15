import { createSlice} from "@reduxjs/toolkit";

export interface IAuthState {
   isAuth: boolean;
   login: string;
   password: string;
}
                               
const initialState: IAuthState = {
   isAuth: false,
   login: 'test@mail.test',
   password: '12345'
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login: (state) => {
         state.isAuth = true;
      },
      logout: (state) => {
         state.isAuth = false;
      }
   }
});


export default authSlice.reducer;
export const authActions = authSlice.actions;