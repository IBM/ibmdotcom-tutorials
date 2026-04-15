import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ColorPickerChannelSliderLabelBaseProps extends PolymorphicProps {
}
export interface ColorPickerChannelSliderLabelProps extends HTMLProps<'label'>, ColorPickerChannelSliderLabelBaseProps {
}
export declare const ColorPickerChannelSliderLabel: ForwardRefExoticComponent<ColorPickerChannelSliderLabelProps & RefAttributes<HTMLLabelElement>>;
