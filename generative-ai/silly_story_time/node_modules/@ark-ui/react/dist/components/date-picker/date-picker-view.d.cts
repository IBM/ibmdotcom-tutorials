import { ViewProps } from '@zag-js/date-picker';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerViewBaseProps extends Required<ViewProps>, PolymorphicProps {
}
export interface DatePickerViewProps extends HTMLProps<'div'>, DatePickerViewBaseProps {
}
export declare const DatePickerView: ForwardRefExoticComponent<DatePickerViewProps & RefAttributes<HTMLDivElement>>;
