import { Assign } from '../../types';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseRatingGroupProps } from './use-rating-group';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface RatingGroupRootBaseProps extends UseRatingGroupProps, PolymorphicProps {
}
export interface RatingGroupRootProps extends Assign<HTMLProps<'div'>, RatingGroupRootBaseProps> {
}
export declare const RatingGroupRoot: ForwardRefExoticComponent<RatingGroupRootProps & RefAttributes<HTMLDivElement>>;
