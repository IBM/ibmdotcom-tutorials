import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerTableHeaderBaseProps extends PolymorphicProps {
}
export interface DatePickerTableHeaderProps extends HTMLProps<'th'>, DatePickerTableHeaderBaseProps {
}
export declare const DatePickerTableHeader: ForwardRefExoticComponent<DatePickerTableHeaderProps & RefAttributes<HTMLTableCellElement>>;
