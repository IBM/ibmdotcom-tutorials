import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CarouselItemGroupBaseProps extends PolymorphicProps {
}
export interface CarouselItemGroupProps extends HTMLProps<'div'>, CarouselItemGroupBaseProps {
}
export declare const CarouselItemGroup: ForwardRefExoticComponent<CarouselItemGroupProps & RefAttributes<HTMLDivElement>>;
