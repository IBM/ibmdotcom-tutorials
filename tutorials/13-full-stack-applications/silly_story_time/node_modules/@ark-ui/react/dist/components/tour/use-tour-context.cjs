'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [TourProvider, useTourContext] = createContext.createContext({
  name: "TourContext",
  hookName: "useTourContext",
  providerName: "<TourProvider />"
});

exports.TourProvider = TourProvider;
exports.useTourContext = useTourContext;
