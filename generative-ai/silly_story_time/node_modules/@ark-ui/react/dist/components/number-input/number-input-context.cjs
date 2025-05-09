'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useNumberInputContext = require('./use-number-input-context.cjs');

const NumberInputContext = (props) => props.children(useNumberInputContext.useNumberInputContext());

exports.NumberInputContext = NumberInputContext;
