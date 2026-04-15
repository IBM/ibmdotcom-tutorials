'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useRadioGroupContext = require('./use-radio-group-context.cjs');

const RadioGroupContext = (props) => props.children(useRadioGroupContext.useRadioGroupContext());

exports.RadioGroupContext = RadioGroupContext;
