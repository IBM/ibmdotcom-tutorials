import { ColumnProps } from '@zag-js/time-picker';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TimePickerColumnBaseProps extends ColumnProps, PolymorphicProps {
}
export interface TimePickerColumnProps extends HTMLProps<'div'>, TimePickerColumnBaseProps {
}
export declare const TimePickerColumn: ForwardRefExoticComponent<TimePickerColumnProps & RefAttributes<HTMLDivElement>>;
