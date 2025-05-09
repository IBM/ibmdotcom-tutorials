import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerAreaThumbBaseProps extends PolymorphicProps {
}
export interface ColorPickerAreaThumbProps extends HTMLProps<'div'>, ColorPickerAreaThumbBaseProps {
}
export declare const ColorPickerAreaThumb: ForwardRefExoticComponent<ColorPickerAreaThumbProps & RefAttributes<HTMLDivElement>>;
