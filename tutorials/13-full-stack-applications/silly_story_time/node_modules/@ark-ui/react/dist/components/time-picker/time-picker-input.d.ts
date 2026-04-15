import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TimePickerInputBaseProps extends PolymorphicProps {
}
export interface TimePickerInputProps extends HTMLProps<'input'>, TimePickerInputBaseProps {
}
export declare const TimePickerInput: ForwardRefExoticComponent<TimePickerInputProps & RefAttributes<HTMLInputElement>>;
