import { DayTableCellProps, TableCellProps } from '@zag-js/date-picker';
import { Provider } from 'react';
type Union<T, U> = {
    [K in keyof T]: K extends keyof U ? U[K] | T[K] : T[K];
} & Omit<U, keyof T>;
type CellProps = Union<DayTableCellProps, TableCellProps>;
export interface UseDatePickerTableCellPropsContext extends CellProps {
}
export declare const DatePickerTableCellPropsProvider: Provider<UseDatePickerTableCellPropsContext>, useDatePickerTableCellPropsContext: () => UseDatePickerTableCellPropsContext;
export {};
