import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerContentBaseProps extends PolymorphicProps {
}
export interface ColorPickerContentProps extends HTMLProps<'div'>, ColorPickerContentBaseProps {
}
export declare const ColorPickerContent: ForwardRefExoticComponent<ColorPickerContentProps & RefAttributes<HTMLDivElement>>;
