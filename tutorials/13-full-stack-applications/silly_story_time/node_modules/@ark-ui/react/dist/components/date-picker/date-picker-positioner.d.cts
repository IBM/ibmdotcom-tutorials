import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerPositionerBaseProps extends PolymorphicProps {
}
export interface DatePickerPositionerProps extends HTMLProps<'div'>, DatePickerPositionerBaseProps {
}
export declare const DatePickerPositioner: ForwardRefExoticComponent<DatePickerPositionerProps & RefAttributes<HTMLDivElement>>;
