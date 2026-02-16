import { ReactNode } from 'react';
import { UseRatingGroupContext } from './use-rating-group-context';
export interface RatingGroupContextProps {
    children: (context: UseRatingGroupContext) => ReactNode;
}
export declare const RatingGroupContext: (props: RatingGroupContextProps) => ReactNode;
