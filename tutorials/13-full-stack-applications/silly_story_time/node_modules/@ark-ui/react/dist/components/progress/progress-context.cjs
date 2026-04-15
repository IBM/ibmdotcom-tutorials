'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useProgressContext = require('./use-progress-context.cjs');

const ProgressContext = (props) => props.children(useProgressContext.useProgressContext());

exports.ProgressContext = ProgressContext;
