import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerRangeTextBaseProps extends PolymorphicProps {
}
export interface DatePickerRangeTextProps extends HTMLProps<'div'>, DatePickerRangeTextBaseProps {
}
export declare const DatePickerRangeText: ForwardRefExoticComponent<DatePickerRangeTextProps & RefAttributes<HTMLDivElement>>;
