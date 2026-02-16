import { SwatchTriggerProps } from '@zag-js/color-picker';
import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerSwatchTriggerBaseProps extends SwatchTriggerProps, PolymorphicProps {
}
export interface ColorPickerSwatchTriggerProps extends Assign<HTMLProps<'button'>, ColorPickerSwatchTriggerBaseProps> {
}
export declare const ColorPickerSwatchTrigger: ForwardRefExoticComponent<ColorPickerSwatchTriggerProps & RefAttributes<HTMLButtonElement>>;
