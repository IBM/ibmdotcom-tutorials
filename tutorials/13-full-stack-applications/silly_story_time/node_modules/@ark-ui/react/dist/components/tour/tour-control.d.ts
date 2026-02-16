import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TourControlBaseProps extends PolymorphicProps {
}
export interface TourControlProps extends HTMLProps<'div'>, TourControlBaseProps {
}
export declare const TourControl: ForwardRefExoticComponent<TourControlProps & RefAttributes<HTMLDivElement>>;
