import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseSliderProps } from './use-slider';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SliderRootBaseProps extends UseSliderProps, PolymorphicProps {
}
export interface SliderRootProps extends Assign<HTMLProps<'div'>, SliderRootBaseProps> {
}
export declare const SliderRoot: ForwardRefExoticComponent<SliderRootProps & RefAttributes<HTMLDivElement>>;
