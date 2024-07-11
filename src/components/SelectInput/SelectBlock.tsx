import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import styles from './SelectBlock.module.css';
import { ISelectBlockProps } from './SelectBlock.props';


function SelectBlock({ name, list }: ISelectBlockProps) {

   const [selectIsActive, setSelectIsActive] = useState(false);

   return (
      <div className={styles['select']}>
         <div className={styles['select__title']} onClick={() => setSelectIsActive(s => !s)}>Choose {name}:</div>
         <div className={selectIsActive ? styles['select__list_active'] : styles['select__list']}>
            {list.map((item, index) => {
               return (
                  <div className={styles['select__list-item']} key={index}>
                     <Checkbox name={'name'} value={item} />
                  </div>
               )
            })}
         </div>
      </div>

   );
};

export default SelectBlock;