import { InputHTMLAttributes } from "react";


export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
   value: string;
   name: string;
   id: string;
   groupValue: string | number;
   changeGroupValue(param: any): void;
}