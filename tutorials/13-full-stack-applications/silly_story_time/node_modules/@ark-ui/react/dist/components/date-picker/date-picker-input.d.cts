import { InputProps } from '@zag-js/date-picker';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerInputBaseProps extends InputProps, PolymorphicProps {
}
export interface DatePickerInputProps extends HTMLProps<'input'>, DatePickerInputBaseProps {
}
export declare const DatePickerInput: ForwardRefExoticComponent<DatePickerInputProps & RefAttributes<HTMLInputElement>>;
