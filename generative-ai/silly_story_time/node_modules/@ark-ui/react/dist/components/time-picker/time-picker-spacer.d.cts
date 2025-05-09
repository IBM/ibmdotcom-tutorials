import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TimePickerSpacerBaseProps extends PolymorphicProps {
}
export interface TimePickerSpacerProps extends HTMLProps<'div'>, TimePickerSpacerBaseProps {
}
export declare const TimePickerSpacer: ForwardRefExoticComponent<TimePickerSpacerProps & RefAttributes<HTMLDivElement>>;
