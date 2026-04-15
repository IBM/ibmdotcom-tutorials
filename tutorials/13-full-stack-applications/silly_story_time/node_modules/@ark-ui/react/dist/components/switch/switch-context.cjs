'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useSwitchContext = require('./use-switch-context.cjs');

const SwitchContext = (props) => props.children(useSwitchContext.useSwitchContext());

exports.SwitchContext = SwitchContext;
