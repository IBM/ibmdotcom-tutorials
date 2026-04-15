import { HTMLProps, PolymorphicProps } from '../factory';
import { UsePresenceProps } from '../presence';
import { UseTimePickerReturn } from './use-time-picker';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseTimePickerReturn;
}
export interface TimePickerRootProviderBaseProps extends RootProviderProps, UsePresenceProps, PolymorphicProps {
}
export interface TimePickerRootProviderProps extends HTMLProps<'div'>, TimePickerRootProviderBaseProps {
}
export declare const TimePickerRootProvider: ForwardRefExoticComponent<TimePickerRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
