import { ChannelInputProps } from '@zag-js/color-picker';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerChannelInputBaseProps extends ChannelInputProps, PolymorphicProps {
}
export interface ColorPickerChannelInputProps extends HTMLProps<'input'>, ColorPickerChannelInputBaseProps {
}
export declare const ColorPickerChannelInput: ForwardRefExoticComponent<ColorPickerChannelInputProps & RefAttributes<HTMLInputElement>>;
