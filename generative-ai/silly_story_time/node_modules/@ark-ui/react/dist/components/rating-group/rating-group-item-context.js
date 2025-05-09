'use client';
import { useRatingGroupItemContext } from './use-rating-group-item-context.js';

const RatingGroupItemContext = (props) => props.children(useRatingGroupItemContext());

export { RatingGroupItemContext };
