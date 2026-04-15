import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TourTitleBaseProps extends PolymorphicProps {
}
export interface TourTitleProps extends HTMLProps<'h2'>, TourTitleBaseProps {
}
export declare const TourTitle: ForwardRefExoticComponent<TourTitleProps & RefAttributes<HTMLHeadingElement>>;
