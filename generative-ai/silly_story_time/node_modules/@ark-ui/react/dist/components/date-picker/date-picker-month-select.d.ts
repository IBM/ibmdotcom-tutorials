import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerMonthSelectBaseProps extends PolymorphicProps {
}
export interface DatePickerMonthSelectProps extends HTMLProps<'select'>, DatePickerMonthSelectBaseProps {
}
export declare const DatePickerMonthSelect: ForwardRefExoticComponent<DatePickerMonthSelectProps & RefAttributes<HTMLSelectElement>>;
