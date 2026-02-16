import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerSwatchIndicatorBaseProps extends PolymorphicProps {
}
export interface ColorPickerSwatchIndicatorProps extends HTMLProps<'div'>, ColorPickerSwatchIndicatorBaseProps {
}
export declare const ColorPickerSwatchIndicator: ForwardRefExoticComponent<ColorPickerSwatchIndicatorProps & RefAttributes<HTMLDivElement>>;
