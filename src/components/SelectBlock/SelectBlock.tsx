import { useEffect, useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import styles from './SelectBlock.module.css';
import { ISelectBlockProps } from './SelectBlock.props';
import Radio from '../Radio/Radio';


function SelectBlock({
   isMultiple,
   startRadioValue,
   changeQuantityParams,
   name,
   list }: ISelectBlockProps) {

   const [selectIsActive, setSelectIsActive] = useState<boolean>(false);
   const [radioGroupValue, setRadioGroupValue] = useState<number>(startRadioValue);

   useEffect(() => {
      changeQuantityParams(prevState => ({ ...prevState, limit: radioGroupValue }));
   }, [radioGroupValue])

   return (
      <div className={selectIsActive ? styles['select_active'] : styles['select']}>
         <div className={selectIsActive ? styles['select__title_active'] : styles['select__title']} onClick={() => setSelectIsActive(s => !s)}>Choose {name}: </div>
         <div className={selectIsActive ? styles['select__list_active'] : styles['select__list']}>
            {isMultiple && list.map((item, index) => {
               return (
                  <div className={styles['select__list-item']} key={index}>
                     <Checkbox
                        id={item}
                        name={name}
                        value={item}
                     />
                  </div>
               )
            })}

            {!isMultiple && list.map((item, index) => {
               return (
                  <div className={styles['select__list-item']} key={index}>
                     <Radio
                        id={item}
                        name={name}
                        value={item}
                        groupValue={radioGroupValue}
                        changeGroupValue={setRadioGroupValue}
                     />
                  </div>
               )
            })}
         </div>
      </div>

   );
};

export default SelectBlock;