import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TimePickerTriggerBaseProps extends PolymorphicProps {
}
export interface TimePickerTriggerProps extends HTMLProps<'button'>, TimePickerTriggerBaseProps {
}
export declare const TimePickerTrigger: ForwardRefExoticComponent<TimePickerTriggerProps & RefAttributes<HTMLButtonElement>>;
