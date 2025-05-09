import { SwatchProps } from '@zag-js/color-picker';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerSwatchBaseProps extends SwatchProps, PolymorphicProps {
}
export interface ColorPickerSwatchProps extends HTMLProps<'div'>, ColorPickerSwatchBaseProps {
}
export declare const ColorPickerSwatch: ForwardRefExoticComponent<ColorPickerSwatchProps & RefAttributes<HTMLDivElement>>;
