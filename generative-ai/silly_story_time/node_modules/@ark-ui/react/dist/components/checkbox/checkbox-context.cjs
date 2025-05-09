'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useCheckboxContext = require('./use-checkbox-context.cjs');

const CheckboxContext = (props) => props.children(useCheckboxContext.useCheckboxContext());

exports.CheckboxContext = CheckboxContext;
