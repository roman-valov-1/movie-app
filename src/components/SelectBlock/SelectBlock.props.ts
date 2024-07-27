export interface ISelectBlockProps {
   name: string;
   list: string[] | number[];
   isMultiple: boolean;
   startRadioValue: number;
   changeQuantityParams(params: any): void;
}