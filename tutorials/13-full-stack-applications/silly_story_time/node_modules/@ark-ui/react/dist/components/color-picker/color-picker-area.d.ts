import { AreaProps } from '@zag-js/color-picker';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerAreaBaseProps extends AreaProps, PolymorphicProps {
}
export interface ColorPickerAreaProps extends HTMLProps<'div'>, ColorPickerAreaBaseProps {
}
export declare const ColorPickerArea: ForwardRefExoticComponent<ColorPickerAreaProps & RefAttributes<HTMLDivElement>>;
