import { ThumbProps } from '@zag-js/slider';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SliderThumbBaseProps extends ThumbProps, PolymorphicProps {
}
export interface SliderThumbProps extends HTMLProps<'div'>, SliderThumbBaseProps {
}
export declare const SliderThumb: ForwardRefExoticComponent<SliderThumbProps & RefAttributes<HTMLDivElement>>;
