'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useToastContext = require('./use-toast-context.cjs');

const ToastContext = (props) => props.children(useToastContext.useToastContext());

exports.ToastContext = ToastContext;
