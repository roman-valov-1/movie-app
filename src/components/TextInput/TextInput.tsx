import styles from './TextInput.module.css';
import { forwardRef } from 'react';
import { ITextInputProps } from './TextInput.props';

const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(function Input({...props}, ref?) {
   return (
      <input 
         {...props}
         ref={ref}
         className={styles['input']}
      />
   )
});

export default TextInput;