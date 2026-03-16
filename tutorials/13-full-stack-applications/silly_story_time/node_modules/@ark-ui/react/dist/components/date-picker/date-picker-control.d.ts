import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerControlBaseProps extends PolymorphicProps {
}
export interface DatePickerControlProps extends HTMLProps<'div'>, DatePickerControlBaseProps {
}
export declare const DatePickerControl: ForwardRefExoticComponent<DatePickerControlProps & RefAttributes<HTMLDivElement>>;
