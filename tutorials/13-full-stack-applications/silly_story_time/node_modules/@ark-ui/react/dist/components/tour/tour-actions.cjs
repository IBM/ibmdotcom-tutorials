'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useTourContext = require('./use-tour-context.cjs');

const TourActions = (props) => props.children(useTourContext.useTourContext().step?.actions ?? []);

exports.TourActions = TourActions;
