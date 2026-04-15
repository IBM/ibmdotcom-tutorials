'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useToggleGroupContext = require('./use-toggle-group-context.cjs');

const ToggleGroupContext = (props) => props.children(useToggleGroupContext.useToggleGroupContext());

exports.ToggleGroupContext = ToggleGroupContext;
