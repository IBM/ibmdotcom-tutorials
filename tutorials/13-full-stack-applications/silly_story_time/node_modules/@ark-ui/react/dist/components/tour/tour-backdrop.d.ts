import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TourBackdropBaseProps extends PolymorphicProps {
}
export interface TourBackdropProps extends HTMLProps<'div'>, TourBackdropBaseProps {
}
export declare const TourBackdrop: ForwardRefExoticComponent<TourBackdropProps & RefAttributes<HTMLDivElement>>;
