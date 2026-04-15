'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useClipboardContext = require('./use-clipboard-context.cjs');

const ClipboardContext = (props) => props.children(useClipboardContext.useClipboardContext());

exports.ClipboardContext = ClipboardContext;
