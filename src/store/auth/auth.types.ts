export interface IAuthState {
   isAuth: boolean;
   isLoading: boolean;
   error: string;
   user: IUserData | null;
}

export interface IUserData {
   email: string;
   name: string;
}