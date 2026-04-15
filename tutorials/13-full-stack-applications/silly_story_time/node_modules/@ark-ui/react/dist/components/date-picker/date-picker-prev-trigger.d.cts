import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerPrevTriggerBaseProps extends PolymorphicProps {
}
export interface DatePickerPrevTriggerProps extends HTMLProps<'button'>, DatePickerPrevTriggerBaseProps {
}
export declare const DatePickerPrevTrigger: ForwardRefExoticComponent<DatePickerPrevTriggerProps & RefAttributes<HTMLButtonElement>>;
