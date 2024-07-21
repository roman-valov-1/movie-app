import SelectBlock from '../SelectBlock/SelectBlock';
import styles from './FiltersBlock.module.css';
import { IFiltersBlockProps } from './FiltersBlock.props';

interface IfiltersData {
   genres: string[];
   countries: string[];
}

const filtersData: IfiltersData = {
   genres: [
      'комедия',
      'драма',
      'криминал',
      'документальный',
      'ужасы',
      'мультфильм',
      'триллер',
      'фантастика',
      'боевик',
      'приключения'
   ],
   countries: [
      'США',
      'Великобританя',
      'Канада',
      'Мексика',
      'Россия'
   ]
}

function FiltersBlock( {...props}: IFiltersBlockProps) {

   return (
      <div className={styles['filters']}>
         {Object.keys(filtersData).map( i => {
            return <SelectBlock key={i} name={i} list={filtersData[i]} />
         })}
      </div>
   )
}

export default FiltersBlock;