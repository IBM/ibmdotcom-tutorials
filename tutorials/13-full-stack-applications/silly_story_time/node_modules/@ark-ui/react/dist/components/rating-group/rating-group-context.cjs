'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useRatingGroupContext = require('./use-rating-group-context.cjs');

const RatingGroupContext = (props) => props.children(useRatingGroupContext.useRatingGroupContext());

exports.RatingGroupContext = RatingGroupContext;
