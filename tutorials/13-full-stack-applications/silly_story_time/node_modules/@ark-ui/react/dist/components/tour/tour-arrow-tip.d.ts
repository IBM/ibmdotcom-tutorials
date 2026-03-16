import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TourArrowTipBaseProps extends PolymorphicProps {
}
export interface TourArrowTipProps extends HTMLProps<'div'>, TourArrowTipBaseProps {
}
export declare const TourArrowTip: ForwardRefExoticComponent<TourArrowTipProps & RefAttributes<HTMLDivElement>>;
