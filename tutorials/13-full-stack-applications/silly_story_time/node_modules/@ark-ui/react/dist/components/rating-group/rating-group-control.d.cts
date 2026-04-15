import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface RatingGroupControlBaseProps extends PolymorphicProps {
}
export interface RatingGroupControlProps extends HTMLProps<'div'>, RatingGroupControlBaseProps {
}
export declare const RatingGroupControl: ForwardRefExoticComponent<RatingGroupControlProps & RefAttributes<HTMLDivElement>>;
