import { ReactNode } from "react";


export interface IPaginationBlockProps {
   children: ReactNode;
   currentPage: number;
   maxPage: number;
   quantity: number;
   changePaginationParams(param: any): void; 
}