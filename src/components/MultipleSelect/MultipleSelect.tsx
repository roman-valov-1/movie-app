import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import styles from '../SelectBlock/SelectBlock.module.css';
import { IMultipleSelectProps } from './MultipleSelect.props';


function MultipleSelect({ name, list }: IMultipleSelectProps) {

   const [selectIsActive, setSelectIsActive] = useState<boolean>(false);

   return (
      <div className={selectIsActive ? styles['select_active'] : styles['select']}>
         <div className={selectIsActive ? styles['select__title_active'] : styles['select__title']} onClick={() => setSelectIsActive(s => !s)}>Choose {name}: </div>
         <div className={selectIsActive ? styles['select__list_active'] : styles['select__list']}>
            {list.map((item, index) => {
               return (
                  <div className={styles['select__list-item']} key={index}>
                     <Checkbox
                        id={item}
                        name={name}
                        value={item}
                        onClick={() => setSelectIsActive(s => !s)}
                     />
                  </div>
               )
            })}
         </div>
      </div>

   );
};

export default MultipleSelect;