'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [RatingGroupItemProvider, useRatingGroupItemContext] = createContext.createContext({
  name: "RatingGroupItemContext",
  hookName: "useRatingGroupItemContext",
  providerName: "<RatingGroupItemProvider />"
});

exports.RatingGroupItemProvider = RatingGroupItemProvider;
exports.useRatingGroupItemContext = useRatingGroupItemContext;
