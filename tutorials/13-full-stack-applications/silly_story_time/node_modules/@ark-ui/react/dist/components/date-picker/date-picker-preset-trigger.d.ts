import { PresetTriggerProps } from '@zag-js/date-picker';
import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerPresetTriggerBaseProps extends PresetTriggerProps, PolymorphicProps {
}
export interface DatePickerPresetTriggerProps extends Assign<HTMLProps<'button'>, DatePickerPresetTriggerBaseProps> {
}
export declare const DatePickerPresetTrigger: ForwardRefExoticComponent<DatePickerPresetTriggerProps & RefAttributes<HTMLButtonElement>>;
