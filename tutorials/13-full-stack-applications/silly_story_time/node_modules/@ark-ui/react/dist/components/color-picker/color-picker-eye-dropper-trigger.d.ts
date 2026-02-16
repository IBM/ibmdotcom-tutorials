import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerEyeDropperTriggerBaseProps extends PolymorphicProps {
}
export interface ColorPickerEyeDropperTriggerProps extends HTMLProps<'button'>, ColorPickerEyeDropperTriggerBaseProps {
}
export declare const ColorPickerEyeDropperTrigger: ForwardRefExoticComponent<ColorPickerEyeDropperTriggerProps & RefAttributes<HTMLButtonElement>>;
