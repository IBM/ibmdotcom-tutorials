import { HTMLProps, PolymorphicProps } from '../factory';
import { UseCarouselProps } from './use-carousel';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CarouselRootBaseProps extends UseCarouselProps, PolymorphicProps {
}
export interface CarouselRootProps extends HTMLProps<'div'>, CarouselRootBaseProps {
}
export declare const CarouselRoot: ForwardRefExoticComponent<CarouselRootProps & RefAttributes<HTMLDivElement>>;
