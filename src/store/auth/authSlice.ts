import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IUserData } from "./auth.types";
import { login } from "./login";

const initialState: IAuthState = {
   isAuth: JSON.parse(localStorage.getItem('auth')),
   isLoading: false,
   error: '',
   user: JSON.parse(localStorage.getItem('user'))
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logout: (state) => {
         localStorage.removeItem('auth');
         localStorage.removeItem('user');
         state.isAuth = false;
         state.user = null;
      }
   },
   extraReducers: builder => [
      builder
         .addCase(login.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(login.fulfilled, (state, action: PayloadAction<IUserData>) => {
            state.isLoading = false;
            state.error = '';
            localStorage.setItem('auth', 'true');
            localStorage.setItem('user', JSON.stringify({
               email: action.payload.email,
               name: action.payload.name
            }));
            state.isAuth = true;
            state.user = {
               email: action.payload.email,
               name: action.payload.name
            };
         })
         .addCase(login.rejected, (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
         })
   ]
});


export default authSlice.reducer;
export const authActions = authSlice.actions;