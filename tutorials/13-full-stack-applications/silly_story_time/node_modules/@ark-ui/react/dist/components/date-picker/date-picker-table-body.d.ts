import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerTableBodyBaseProps extends PolymorphicProps {
}
export interface DatePickerTableBodyProps extends HTMLProps<'tbody'>, DatePickerTableBodyBaseProps {
}
export declare const DatePickerTableBody: ForwardRefExoticComponent<DatePickerTableBodyProps & RefAttributes<HTMLTableSectionElement>>;
