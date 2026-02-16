import { ReactNode } from 'react';
import { UseRatingGroupItemContext } from './use-rating-group-item-context';
export interface RatingGroupItemContextProps {
    children: (context: UseRatingGroupItemContext) => ReactNode;
}
export declare const RatingGroupItemContext: (props: RatingGroupItemContextProps) => ReactNode;
