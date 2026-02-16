'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useHoverCardContext = require('./use-hover-card-context.cjs');

const HoverCardContext = (props) => props.children(useHoverCardContext.useHoverCardContext());

exports.HoverCardContext = HoverCardContext;
