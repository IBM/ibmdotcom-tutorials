import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TourArrowBaseProps extends PolymorphicProps {
}
export interface TourArrowProps extends HTMLProps<'div'>, TourArrowBaseProps {
}
export declare const TourArrow: ForwardRefExoticComponent<TourArrowProps & RefAttributes<HTMLDivElement>>;
