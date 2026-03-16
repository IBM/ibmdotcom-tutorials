import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TimePickerLabelBaseProps extends PolymorphicProps {
}
export interface TimePickerLabelProps extends HTMLProps<'label'>, TimePickerLabelBaseProps {
}
export declare const TimePickerLabel: ForwardRefExoticComponent<TimePickerLabelProps & RefAttributes<HTMLLabelElement>>;
