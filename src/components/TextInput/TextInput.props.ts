import { InputHTMLAttributes } from 'react';

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement>{
   isValid?: boolean
}