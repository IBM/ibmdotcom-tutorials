import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerClearTriggerBaseProps extends PolymorphicProps {
}
export interface DatePickerClearTriggerProps extends HTMLProps<'button'>, DatePickerClearTriggerBaseProps {
}
export declare const DatePickerClearTrigger: ForwardRefExoticComponent<DatePickerClearTriggerProps & RefAttributes<HTMLButtonElement>>;
