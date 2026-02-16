'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useComboboxItemContext = require('./use-combobox-item-context.cjs');

const ComboboxItemContext = (props) => props.children(useComboboxItemContext.useComboboxItemContext());

exports.ComboboxItemContext = ComboboxItemContext;
