import { HTMLProps, PolymorphicProps } from '../factory';
import { UseRatingGroupReturn } from './use-rating-group';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseRatingGroupReturn;
}
export interface RatingGroupRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface RatingGroupRootProviderProps extends HTMLProps<'div'>, RatingGroupRootProviderBaseProps {
}
export declare const RatingGroupRootProvider: ForwardRefExoticComponent<RatingGroupRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
