'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useFieldContext = require('./use-field-context.cjs');

const FieldContext = (props) => props.children(useFieldContext.useFieldContext());

exports.FieldContext = FieldContext;
