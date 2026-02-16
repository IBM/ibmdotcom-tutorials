'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useComboboxContext = require('./use-combobox-context.cjs');

const ComboboxContext = (props) => props.children(useComboboxContext.useComboboxContext());

exports.ComboboxContext = ComboboxContext;
