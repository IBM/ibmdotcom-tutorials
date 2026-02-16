import { ColorFormat } from '@zag-js/color-picker';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface FormatOptions {
    format: ColorFormat;
}
export interface ColorPickerViewBaseProps extends FormatOptions, PolymorphicProps {
}
export interface ColorPickerViewProps extends HTMLProps<'div'>, ColorPickerViewBaseProps {
}
export declare const ColorPickerView: ForwardRefExoticComponent<ColorPickerViewProps & RefAttributes<HTMLDivElement>>;
export {};
