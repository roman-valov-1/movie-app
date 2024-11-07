import { InputHTMLAttributes } from "react";


export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
   value: string;
   name: string;
}