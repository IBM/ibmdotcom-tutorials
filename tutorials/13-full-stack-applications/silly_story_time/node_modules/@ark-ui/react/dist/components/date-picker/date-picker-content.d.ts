import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerContentBaseProps extends PolymorphicProps {
}
export interface DatePickerContentProps extends HTMLProps<'div'>, DatePickerContentBaseProps {
}
export declare const DatePickerContent: ForwardRefExoticComponent<DatePickerContentProps & RefAttributes<HTMLDivElement>>;
