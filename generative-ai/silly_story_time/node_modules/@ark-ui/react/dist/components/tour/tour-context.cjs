'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useTourContext = require('./use-tour-context.cjs');

const TourContext = (props) => props.children(useTourContext.useTourContext());

exports.TourContext = TourContext;
