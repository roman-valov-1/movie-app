import { ChangeEvent } from 'react';
import { IRadioProps } from './Radio.props';
import styles from './Radio.module.css';
import cn from 'classnames';

function Radio({ 
   groupValue, 
   value, 
   name, 
   changeGroupValue,
   ...props }: IRadioProps) {

   const handler = (e: ChangeEvent<HTMLInputElement>):void => {
      changeGroupValue(e.target.value);
      console.log(value, groupValue)
   };

   return (
      <label 
         htmlFor={value} 
         className={cn({
            [styles['label-checked']]: value == groupValue,
            [styles['label']]: value != groupValue
         })} 
      >
         <input
            className={styles['radio']}
            type="radio"
            id={value}
            name={name}
            value={value}
            onChange={handler}
            {...props}
            
         />
         <span className={styles['radio-value']}>{value}</span>
      </label>
   );
}

export default Radio;