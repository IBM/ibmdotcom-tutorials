import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerSwatchGroupBaseProps extends PolymorphicProps {
}
export interface ColorPickerSwatchGroupProps extends HTMLProps<'div'>, ColorPickerSwatchGroupBaseProps {
}
export declare const ColorPickerSwatchGroup: ForwardRefExoticComponent<ColorPickerSwatchGroupProps & RefAttributes<HTMLDivElement>>;
