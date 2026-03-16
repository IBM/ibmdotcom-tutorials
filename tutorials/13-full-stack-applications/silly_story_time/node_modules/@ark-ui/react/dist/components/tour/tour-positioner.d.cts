import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TourPositionerBaseProps extends PolymorphicProps {
}
export interface TourPositionerProps extends HTMLProps<'div'>, TourPositionerBaseProps {
}
export declare const TourPositioner: ForwardRefExoticComponent<TourPositionerProps & RefAttributes<HTMLDivElement>>;
