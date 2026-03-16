import { ItemState } from '@zag-js/rating-group';
import { Provider } from 'react';
export interface UseRatingGroupItemContext extends ItemState {
}
export declare const RatingGroupItemProvider: Provider<UseRatingGroupItemContext>, useRatingGroupItemContext: () => UseRatingGroupItemContext;
