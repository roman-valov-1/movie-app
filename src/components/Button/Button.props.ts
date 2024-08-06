import { ButtonHTMLAttributes, ReactNode } from "react";


export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode | string;
   styleType?: string;
   page?: number;
   maxPage?: number;
   // disabled?: boolean;
}