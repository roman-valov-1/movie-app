import { useEffect, useState } from 'react';
import styles from '../SelectBlock/SelectBlock.module.css';
import { IPaginationSelectProps } from './PaginationSelect.props';
import Radio from '../Radio/Radio';


function PaginationSelect({
   startRadioValue,
   changeQuantityParams,
   name,
   list }: IPaginationSelectProps) {

   const [selectIsActive, setSelectIsActive] = useState<boolean>(false);
   const [radioGroupValue, setRadioGroupValue] = useState<number>(startRadioValue);

   useEffect(() => {
      changeQuantityParams(prevState => ({ ...prevState, limit: radioGroupValue, page: 1 }));
   }, [radioGroupValue])

   return (
      <div className={selectIsActive ? styles['select_active'] : styles['select']}>
         <div className={selectIsActive 
            ? styles['select__title_active'] 
            : styles['select__title']} onClick={() => setSelectIsActive(s => !s)}>Отображать по {radioGroupValue} элементов </div>
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

export default PaginationSelect;