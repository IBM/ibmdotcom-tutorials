import { HTMLProps, PolymorphicProps } from '../factory';
import { UseSliderReturn } from './use-slider';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseSliderReturn;
}
export interface SliderRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface SliderRootProviderProps extends HTMLProps<'div'>, SliderRootProviderBaseProps {
}
export declare const SliderRootProvider: ForwardRefExoticComponent<SliderRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
