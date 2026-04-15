import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CarouselControlBaseProps extends PolymorphicProps {
}
export interface CarouselControlProps extends HTMLProps<'div'>, CarouselControlBaseProps {
}
export declare const CarouselControl: ForwardRefExoticComponent<CarouselControlProps & RefAttributes<HTMLDivElement>>;
