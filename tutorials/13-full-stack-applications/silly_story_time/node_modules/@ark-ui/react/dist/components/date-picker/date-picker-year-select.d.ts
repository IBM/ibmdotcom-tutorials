import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerYearSelectBaseProps extends PolymorphicProps {
}
export interface DatePickerYearSelectProps extends HTMLProps<'select'>, DatePickerYearSelectBaseProps {
}
export declare const DatePickerYearSelect: ForwardRefExoticComponent<DatePickerYearSelectProps & RefAttributes<HTMLSelectElement>>;
