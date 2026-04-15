import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import * as rating from '@zag-js/rating-group';
export interface UseRatingGroupProps extends Optional<Omit<rating.Props, 'dir' | 'getRootNode'>, 'id'> {
}
export interface UseRatingGroupReturn extends rating.Api<PropTypes> {
}
export declare const useRatingGroup: (props?: UseRatingGroupProps) => UseRatingGroupReturn;
