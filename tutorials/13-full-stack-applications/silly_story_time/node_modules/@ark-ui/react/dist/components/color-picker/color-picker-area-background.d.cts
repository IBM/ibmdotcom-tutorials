import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerAreaBackgroundBaseProps extends PolymorphicProps {
}
export interface ColorPickerAreaBackgroundProps extends HTMLProps<'div'>, ColorPickerAreaBackgroundBaseProps {
}
export declare const ColorPickerAreaBackground: ForwardRefExoticComponent<ColorPickerAreaBackgroundProps & RefAttributes<HTMLDivElement>>;
