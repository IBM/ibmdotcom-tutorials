'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useRatingGroupItemContext = require('./use-rating-group-item-context.cjs');

const RatingGroupItemContext = (props) => props.children(useRatingGroupItemContext.useRatingGroupItemContext());

exports.RatingGroupItemContext = RatingGroupItemContext;
