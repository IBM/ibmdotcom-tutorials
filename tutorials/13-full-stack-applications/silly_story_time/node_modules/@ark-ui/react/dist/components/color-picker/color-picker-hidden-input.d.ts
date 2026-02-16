import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerHiddenInputBaseProps extends PolymorphicProps {
}
export interface ColorPickerHiddenInputProps extends HTMLProps<'input'>, ColorPickerHiddenInputBaseProps {
}
export declare const ColorPickerHiddenInput: ForwardRefExoticComponent<ColorPickerHiddenInputProps & RefAttributes<HTMLInputElement>>;
