'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useSelectItemContext = require('./use-select-item-context.cjs');

const SelectItemContext = (props) => props.children(useSelectItemContext.useSelectItemContext());

exports.SelectItemContext = SelectItemContext;
