import { HTMLProps, PolymorphicProps } from '../factory';
import { UsePresenceProps } from '../presence';
import { UseDatePickerReturn } from './use-date-picker';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseDatePickerReturn;
}
export interface DatePickerRootProviderBaseProps extends RootProviderProps, UsePresenceProps, PolymorphicProps {
}
export interface DatePickerRootProviderProps extends HTMLProps<'div'>, DatePickerRootProviderBaseProps {
}
export declare const DatePickerRootProvider: ForwardRefExoticComponent<DatePickerRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
