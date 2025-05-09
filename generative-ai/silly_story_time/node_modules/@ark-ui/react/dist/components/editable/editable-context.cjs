'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useEditableContext = require('./use-editable-context.cjs');

const EditableContext = (props) => props.children(useEditableContext.useEditableContext());

exports.EditableContext = EditableContext;
