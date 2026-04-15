'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useTooltipContext = require('./use-tooltip-context.cjs');

const TooltipContext = (props) => props.children(useTooltipContext.useTooltipContext());

exports.TooltipContext = TooltipContext;
