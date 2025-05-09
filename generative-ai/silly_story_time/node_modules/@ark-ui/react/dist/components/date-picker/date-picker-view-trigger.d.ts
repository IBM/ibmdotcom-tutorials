import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerViewTriggerBaseProps extends PolymorphicProps {
}
export interface DatePickerViewTriggerProps extends HTMLProps<'button'>, DatePickerViewTriggerBaseProps {
}
export declare const DatePickerViewTrigger: ForwardRefExoticComponent<DatePickerViewTriggerProps & RefAttributes<HTMLButtonElement>>;
