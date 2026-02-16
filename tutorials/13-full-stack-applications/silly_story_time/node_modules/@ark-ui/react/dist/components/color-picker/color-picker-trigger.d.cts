import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerTriggerBaseProps extends PolymorphicProps {
}
export interface ColorPickerTriggerProps extends HTMLProps<'button'>, ColorPickerTriggerBaseProps {
}
export declare const ColorPickerTrigger: ForwardRefExoticComponent<ColorPickerTriggerProps & RefAttributes<HTMLButtonElement>>;
