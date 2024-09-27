import { ReactNode } from "react";


export interface IPaginationContainerProps {
   children: ReactNode;
   currentPage: number;
   maxPage: number | null;
   quantity?: number;
   changePaginationParams(param: any): void; 
}