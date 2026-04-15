'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useRadioGroupItemContext = require('./use-radio-group-item-context.cjs');

const RadioGroupItemContext = (props) => props.children(useRadioGroupItemContext.useRadioGroupItemContext());

exports.RadioGroupItemContext = RadioGroupItemContext;
