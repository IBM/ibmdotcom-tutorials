import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UsePresenceProps } from '../presence';
import { UseTimePickerProps } from './use-time-picker';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TimePickerRootBaseProps extends UseTimePickerProps, UsePresenceProps, PolymorphicProps {
}
export interface TimePickerRootProps extends Assign<HTMLProps<'div'>, TimePickerRootBaseProps> {
}
export declare const TimePickerRoot: ForwardRefExoticComponent<TimePickerRootProps & RefAttributes<HTMLDivElement>>;
