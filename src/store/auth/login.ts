import { createAsyncThunk } from "@reduxjs/toolkit";

type loginData = {
   email: string;
   password: string;
}

export const login = createAsyncThunk(
   'login',
   async (loginData: loginData, { rejectWithValue }) => {
      try {
         const response = await fetch('/authData.json');
         const data = await response.json();
         const user = data.find(i => {
            return i.email === loginData.email && i.password === loginData.password
         })

         if (user) {
            console.log(user)
            return user;
         } else {
            throw new Error('Неккоректный email или пароль')
         }
      } catch (e) {
         return rejectWithValue(e.message);
      }
   }
)