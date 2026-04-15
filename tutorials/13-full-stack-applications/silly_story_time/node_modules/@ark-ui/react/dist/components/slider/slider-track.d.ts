import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SliderTrackBaseProps extends PolymorphicProps {
}
export interface SliderTrackProps extends HTMLProps<'div'>, SliderTrackBaseProps {
}
export declare const SliderTrack: ForwardRefExoticComponent<SliderTrackProps & RefAttributes<HTMLDivElement>>;
