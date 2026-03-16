'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useFloatingPanelContext = require('./use-floating-panel-context.cjs');

const FloatingPanelContext = (props) => props.children(useFloatingPanelContext.useFloatingPanelContext());

exports.FloatingPanelContext = FloatingPanelContext;
