import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TourContentBaseProps extends PolymorphicProps {
}
export interface TourContentProps extends HTMLProps<'div'>, TourContentBaseProps {
}
export declare const TourContent: ForwardRefExoticComponent<TourContentProps & RefAttributes<HTMLDivElement>>;
