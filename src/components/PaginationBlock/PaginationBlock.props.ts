import { ReactNode } from "react";


export interface IPaginationContainerProps {
   children: ReactNode;
   currentPage: number;
   maxPage: number;
   quantity: number;
   changePaginationParams(param: any): void; 
}