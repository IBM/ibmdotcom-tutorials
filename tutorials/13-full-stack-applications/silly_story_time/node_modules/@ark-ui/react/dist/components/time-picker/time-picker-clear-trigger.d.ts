import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TimePickerClearTriggerBaseProps extends PolymorphicProps {
}
export interface TimePickerClearTriggerProps extends HTMLProps<'button'>, TimePickerClearTriggerBaseProps {
}
export declare const TimePickerClearTrigger: ForwardRefExoticComponent<TimePickerClearTriggerProps & RefAttributes<HTMLButtonElement>>;
