import { HTMLProps, PolymorphicProps } from '../factory';
import { UseCarouselReturn } from './use-carousel';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseCarouselReturn;
}
export interface CarouselRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface CarouselRootProviderProps extends HTMLProps<'div'>, CarouselRootProviderBaseProps {
}
export declare const CarouselRootProvider: ForwardRefExoticComponent<CarouselRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
