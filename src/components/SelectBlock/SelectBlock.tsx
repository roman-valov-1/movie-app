import { useRef, useState } from 'react';
import styles from './SelectBlock.module.css';
import { ISelectBlockProps } from './SelectBlock.props';
import Radio from '../Radio/Radio';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';


function SelectBlock({
   startRadioValue,
   name,
   list }: ISelectBlockProps) {

   const [selectIsActive, setSelectIsActive] = useState<boolean>(false);
   const [radioGroupValue, setRadioGroupValue] = useState<number | string>(startRadioValue);

   const selectRef = useRef(null);
   
   useOnClickOutside(selectRef, () => setSelectIsActive(false));

   return (
      <div className={selectIsActive ? styles['select_active'] : styles['select']} ref={selectRef}>
         <div className={selectIsActive ? styles['select__title_active'] : styles['select__title']}
            onClick={() => setSelectIsActive(s => !s)}>
            Выбрано: {radioGroupValue}
         </div>
         <div className={selectIsActive ? styles['select__list_active'] : styles['select__list']}>
            {list.map((item, index) => {
               return (
                  <div className={styles['select__list-item']} key={index}>
                     <Radio
                        id={item}
                        name={name}
                        value={item}
                        groupValue={radioGroupValue}
                        changeGroupValue={setRadioGroupValue}
                        onClick={() => setSelectIsActive(s => !s)}
                     />
                  </div>
               )
            })}
         </div>
      </div>

   );
};

export default SelectBlock;