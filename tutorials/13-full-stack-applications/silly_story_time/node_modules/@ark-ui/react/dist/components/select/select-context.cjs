'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useSelectContext = require('./use-select-context.cjs');

const SelectContext = (props) => props.children(useSelectContext.useSelectContext());

exports.SelectContext = SelectContext;
