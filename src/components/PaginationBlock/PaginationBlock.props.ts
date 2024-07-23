import { ReactNode } from "react";
import { ISearchParams } from "../../types/searchByName.types";


export interface IPaginationBlockProps {
   children: ReactNode;
   currentPage: number;
   maxPage: number;
   quantity: number;
   changePaginationParams(param: any): void; 
}