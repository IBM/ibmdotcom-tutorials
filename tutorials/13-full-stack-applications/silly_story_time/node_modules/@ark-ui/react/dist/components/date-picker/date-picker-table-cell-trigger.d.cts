import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerTableCellTriggerBaseProps extends PolymorphicProps {
}
export interface DatePickerTableCellTriggerProps extends HTMLProps<'div'>, DatePickerTableCellTriggerBaseProps {
}
export declare const DatePickerTableCellTrigger: ForwardRefExoticComponent<DatePickerTableCellTriggerProps & RefAttributes<HTMLDivElement>>;
