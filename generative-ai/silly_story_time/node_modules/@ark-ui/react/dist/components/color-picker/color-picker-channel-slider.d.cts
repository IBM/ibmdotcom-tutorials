import { ChannelProps } from '@zag-js/color-picker';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerChannelSliderBaseProps extends ChannelProps, PolymorphicProps {
}
export interface ColorPickerChannelSliderProps extends HTMLProps<'div'>, ColorPickerChannelSliderBaseProps {
}
export declare const ColorPickerChannelSlider: ForwardRefExoticComponent<ColorPickerChannelSliderProps & RefAttributes<HTMLDivElement>>;
