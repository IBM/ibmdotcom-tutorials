import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TourDescriptionBaseProps extends PolymorphicProps {
}
export interface TourDescriptionProps extends HTMLProps<'div'>, TourDescriptionBaseProps {
}
export declare const TourDescription: ForwardRefExoticComponent<TourDescriptionProps & RefAttributes<HTMLDivElement>>;
