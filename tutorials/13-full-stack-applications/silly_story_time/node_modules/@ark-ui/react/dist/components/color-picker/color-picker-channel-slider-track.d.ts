import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerChannelSliderTrackBaseProps extends PolymorphicProps {
}
export interface ColorPickerChannelSliderTrackProps extends HTMLProps<'div'>, ColorPickerChannelSliderTrackBaseProps {
}
export declare const ColorPickerChannelSliderTrack: ForwardRefExoticComponent<ColorPickerChannelSliderTrackProps & RefAttributes<HTMLDivElement>>;
