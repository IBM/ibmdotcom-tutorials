import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerViewControlBaseProps extends PolymorphicProps {
}
export interface DatePickerViewControlProps extends HTMLProps<'div'>, DatePickerViewControlBaseProps {
}
export declare const DatePickerViewControl: ForwardRefExoticComponent<DatePickerViewControlProps & RefAttributes<HTMLDivElement>>;
