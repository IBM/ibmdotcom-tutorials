import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TimePickerPositionerBaseProps extends PolymorphicProps {
}
export interface TimePickerPositionerProps extends HTMLProps<'div'>, TimePickerPositionerBaseProps {
}
export declare const TimePickerPositioner: ForwardRefExoticComponent<TimePickerPositionerProps & RefAttributes<HTMLDivElement>>;
