import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerLabelBaseProps extends PolymorphicProps {
}
export interface DatePickerLabelProps extends HTMLProps<'label'>, DatePickerLabelBaseProps {
}
export declare const DatePickerLabel: ForwardRefExoticComponent<DatePickerLabelProps & RefAttributes<HTMLLabelElement>>;
