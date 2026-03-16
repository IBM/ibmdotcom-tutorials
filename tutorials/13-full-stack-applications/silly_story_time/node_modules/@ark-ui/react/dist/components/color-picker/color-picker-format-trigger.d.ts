import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerFormatTriggerBaseProps extends PolymorphicProps {
}
export interface ColorPickerFormatTriggerProps extends HTMLProps<'button'>, ColorPickerFormatTriggerBaseProps {
}
export declare const ColorPickerFormatTrigger: ForwardRefExoticComponent<ColorPickerFormatTriggerProps & RefAttributes<HTMLButtonElement>>;
