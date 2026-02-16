import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerPositionerBaseProps extends PolymorphicProps {
}
export interface ColorPickerPositionerProps extends HTMLProps<'div'>, ColorPickerPositionerBaseProps {
}
export declare const ColorPickerPositioner: ForwardRefExoticComponent<ColorPickerPositionerProps & RefAttributes<HTMLDivElement>>;
