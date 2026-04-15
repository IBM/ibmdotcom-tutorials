import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UsePresenceProps } from '../presence';
import { UseDatePickerProps } from './use-date-picker';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerRootBaseProps extends UseDatePickerProps, UsePresenceProps, PolymorphicProps {
}
export interface DatePickerRootProps extends Assign<HTMLProps<'div'>, DatePickerRootBaseProps> {
}
export declare const DatePickerRoot: ForwardRefExoticComponent<DatePickerRootProps & RefAttributes<HTMLDivElement>>;
