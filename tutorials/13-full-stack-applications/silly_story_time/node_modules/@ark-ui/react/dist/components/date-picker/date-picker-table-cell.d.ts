import { HTMLProps, PolymorphicProps } from '../factory';
import { UseDatePickerTableCellPropsContext } from './use-date-picker-table-cell-props-context';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerTableCellBaseProps extends UseDatePickerTableCellPropsContext, PolymorphicProps {
}
export interface DatePickerTableCellProps extends HTMLProps<'td'>, DatePickerTableCellBaseProps {
}
export declare const DatePickerTableCell: ForwardRefExoticComponent<DatePickerTableCellProps & RefAttributes<HTMLTableCellElement>>;
