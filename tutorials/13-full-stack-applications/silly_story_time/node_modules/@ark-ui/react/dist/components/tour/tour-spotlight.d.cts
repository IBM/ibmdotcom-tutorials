import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TourSpotlightBaseProps extends PolymorphicProps {
}
export interface TourSpotlightProps extends HTMLProps<'div'>, TourSpotlightBaseProps {
}
export declare const TourSpotlight: ForwardRefExoticComponent<TourSpotlightProps & RefAttributes<HTMLDivElement>>;
