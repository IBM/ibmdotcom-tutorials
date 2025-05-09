import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerControlBaseProps extends PolymorphicProps {
}
export interface ColorPickerControlProps extends HTMLProps<'div'>, ColorPickerControlBaseProps {
}
export declare const ColorPickerControl: ForwardRefExoticComponent<ColorPickerControlProps & RefAttributes<HTMLDivElement>>;
