'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const usePopoverContext = require('./use-popover-context.cjs');

const PopoverContext = (props) => props.children(usePopoverContext.usePopoverContext());

exports.PopoverContext = PopoverContext;
