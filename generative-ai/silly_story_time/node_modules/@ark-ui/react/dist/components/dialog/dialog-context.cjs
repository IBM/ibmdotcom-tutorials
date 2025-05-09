'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useDialogContext = require('./use-dialog-context.cjs');

const DialogContext = (props) => props.children(useDialogContext.useDialogContext());

exports.DialogContext = DialogContext;
