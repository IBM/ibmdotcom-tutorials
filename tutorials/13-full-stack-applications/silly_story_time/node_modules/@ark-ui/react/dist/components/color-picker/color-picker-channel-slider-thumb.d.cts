import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerChannelSliderThumbBaseProps extends PolymorphicProps {
}
export interface ColorPickerChannelSliderThumbProps extends HTMLProps<'div'>, ColorPickerChannelSliderThumbBaseProps {
}
export declare const ColorPickerChannelSliderThumb: ForwardRefExoticComponent<ColorPickerChannelSliderThumbProps & RefAttributes<HTMLDivElement>>;
