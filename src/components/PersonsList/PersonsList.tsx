import { useEffect, useState } from "react";
import PaginationBlock from "../PaginationBlock/PaginationBlock";
import styles from './PersonsList.module.css';
import { getChunkedArray } from "../../helpers/getChunkedArray";

function PersonsList({ persons }) {

   const [personsArray, setPersonsArray] = useState(null);
   const [personsPaginationPage, setPersonsPaginationPage] = useState({
      page: 1
   });

   useEffect(() => {
      setPersonsArray(getChunkedArray(persons, 10));
   }, [])

   return (
      <div className={styles['persons']}>
         {personsArray && <PaginationBlock
            currentPage={personsPaginationPage.page}
            maxPage={personsArray.length}
            changePaginationParams={setPersonsPaginationPage}
         >
            <ul className={styles['persons__list']}>
               {personsArray[personsPaginationPage.page - 1].map(person => {
                  if (person.name) return (
                     <li className={styles['persons__item']} key={person.id}>
                        <img src={person.photo} />
                        <div>
                           <div>{person.name}</div>
                           <div>{person.profession}</div>
                        </div>
                     </li>
                  )
                  return;
               })}
            </ul>

         </PaginationBlock>
         }
      </div>
   )
}

export default PersonsList;