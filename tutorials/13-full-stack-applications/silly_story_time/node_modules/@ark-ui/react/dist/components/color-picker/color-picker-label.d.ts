import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerLabelBaseProps extends PolymorphicProps {
}
export interface ColorPickerLabelProps extends HTMLProps<'label'>, ColorPickerLabelBaseProps {
}
export declare const ColorPickerLabel: ForwardRefExoticComponent<ColorPickerLabelProps & RefAttributes<HTMLLabelElement>>;
