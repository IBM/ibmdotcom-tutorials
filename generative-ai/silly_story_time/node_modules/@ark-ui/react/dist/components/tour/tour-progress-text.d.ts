import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TourProgressTextBaseProps extends PolymorphicProps {
}
export interface TourProgressTextProps extends HTMLProps<'div'>, TourProgressTextBaseProps {
}
export declare const TourProgressText: ForwardRefExoticComponent<TourProgressTextProps & RefAttributes<HTMLDivElement>>;
