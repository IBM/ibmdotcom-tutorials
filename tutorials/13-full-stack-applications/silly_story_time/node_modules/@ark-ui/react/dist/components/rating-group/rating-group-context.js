'use client';
import { useRatingGroupContext } from './use-rating-group-context.js';

const RatingGroupContext = (props) => props.children(useRatingGroupContext());

export { RatingGroupContext };
