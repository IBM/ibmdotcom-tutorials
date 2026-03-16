import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CarouselIndicatorGroupBaseProps extends PolymorphicProps {
}
export interface CarouselIndicatorGroupProps extends HTMLProps<'div'>, CarouselIndicatorGroupBaseProps {
}
export declare const CarouselIndicatorGroup: ForwardRefExoticComponent<CarouselIndicatorGroupProps & RefAttributes<HTMLDivElement>>;
