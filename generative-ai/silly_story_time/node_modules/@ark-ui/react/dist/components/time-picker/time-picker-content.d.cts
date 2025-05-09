import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TimePickerContentBaseProps extends PolymorphicProps {
}
export interface TimePickerContentProps extends HTMLProps<'div'>, TimePickerContentBaseProps {
}
export declare const TimePickerContent: ForwardRefExoticComponent<TimePickerContentProps & RefAttributes<HTMLDivElement>>;
