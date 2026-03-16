import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerTableHeadBaseProps extends PolymorphicProps {
}
export interface DatePickerTableHeadProps extends HTMLProps<'thead'>, DatePickerTableHeadBaseProps {
}
export declare const DatePickerTableHead: ForwardRefExoticComponent<DatePickerTableHeadProps & RefAttributes<HTMLTableSectionElement>>;
