import { TimePeriod } from '@zag-js/time-picker';
import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface CombinedCellProps {
    value: number | TimePeriod;
}
export interface TimePickerCellBaseProps extends CombinedCellProps, PolymorphicProps {
}
export interface TimePickerCellProps extends Assign<HTMLProps<'button'>, TimePickerCellBaseProps> {
}
export declare const TimePickerCell: ForwardRefExoticComponent<TimePickerCellProps & RefAttributes<HTMLButtonElement>>;
export {};
