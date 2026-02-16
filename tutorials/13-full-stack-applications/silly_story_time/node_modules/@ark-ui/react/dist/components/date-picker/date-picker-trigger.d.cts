import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerTriggerBaseProps extends PolymorphicProps {
}
export interface DatePickerTriggerProps extends HTMLProps<'button'>, DatePickerTriggerBaseProps {
}
export declare const DatePickerTrigger: ForwardRefExoticComponent<DatePickerTriggerProps & RefAttributes<HTMLButtonElement>>;
