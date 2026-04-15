'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [RatingGroupProvider, useRatingGroupContext] = createContext.createContext({
  name: "RatingGroupContext",
  hookName: "useRatingGroupContext",
  providerName: "<RatingGroupProvider />"
});

exports.RatingGroupProvider = RatingGroupProvider;
exports.useRatingGroupContext = useRatingGroupContext;
