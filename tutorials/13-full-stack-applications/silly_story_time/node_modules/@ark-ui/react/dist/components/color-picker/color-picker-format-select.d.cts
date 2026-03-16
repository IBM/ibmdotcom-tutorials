import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerFormatSelectBaseProps extends PolymorphicProps {
}
export interface ColorPickerFormatSelectProps extends HTMLProps<'select'>, ColorPickerFormatSelectBaseProps {
}
export declare const ColorPickerFormatSelect: ForwardRefExoticComponent<ColorPickerFormatSelectProps & RefAttributes<HTMLSelectElement>>;
