import { useState } from 'react';
import styles from './Checkbox.module.css';
import { ICheckboxProps } from './Checkbox.props';
import cn from 'classnames';

function Checkbox({ value, name, ...props }: ICheckboxProps) {
   const [checked, setChecked] = useState(false);

   const handler = ():void => {
      setChecked(!checked)
   };

   return (
      <label 
         htmlFor={value} 
         className={cn({
            [styles['label-checked']]: checked === true,
            [styles['label']]: checked === false
         })} 
      >
         <input
            className={styles['checkbox']}
            type="checkbox"
            id={value}
            name={name}
            value={value}
            checked={checked}
            onChange={handler}
            {...props}
            
         />
         <span className={styles['checkbox-value']}>{value}</span>
      </label>
   );
}

export default Checkbox;