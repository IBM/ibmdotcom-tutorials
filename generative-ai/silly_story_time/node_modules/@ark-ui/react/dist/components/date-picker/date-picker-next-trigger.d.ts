import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerNextTriggerBaseProps extends PolymorphicProps {
}
export interface DatePickerNextTriggerProps extends HTMLProps<'button'>, DatePickerNextTriggerBaseProps {
}
export declare const DatePickerNextTrigger: ForwardRefExoticComponent<DatePickerNextTriggerProps & RefAttributes<HTMLButtonElement>>;
