import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TimePickerControlBaseProps extends PolymorphicProps {
}
export interface TimePickerControlProps extends HTMLProps<'div'>, TimePickerControlBaseProps {
}
export declare const TimePickerControl: ForwardRefExoticComponent<TimePickerControlProps & RefAttributes<HTMLDivElement>>;
