import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerTableRowBaseProps extends PolymorphicProps {
}
export interface DatePickerTableRowProps extends HTMLProps<'tr'>, DatePickerTableRowBaseProps {
}
export declare const DatePickerTableRow: ForwardRefExoticComponent<DatePickerTableRowProps & RefAttributes<HTMLTableRowElement>>;
