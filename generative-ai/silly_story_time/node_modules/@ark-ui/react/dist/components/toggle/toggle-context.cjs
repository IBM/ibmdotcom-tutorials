'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useToggleContext = require('./use-toggle-context.cjs');

const ToggleContext = (props) => props.children(useToggleContext.useToggleContext());

exports.ToggleContext = ToggleContext;
