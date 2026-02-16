import { TransparencyGridProps } from '@zag-js/color-picker';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerTransparencyGridBaseProps extends TransparencyGridProps, PolymorphicProps {
}
export interface ColorPickerTransparencyGridProps extends HTMLProps<'div'>, ColorPickerTransparencyGridBaseProps {
}
export declare const ColorPickerTransparencyGrid: ForwardRefExoticComponent<ColorPickerTransparencyGridProps & RefAttributes<HTMLDivElement>>;
