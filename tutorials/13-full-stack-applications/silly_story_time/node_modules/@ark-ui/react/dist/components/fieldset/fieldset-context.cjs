'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useFieldsetContext = require('./use-fieldset-context.cjs');

const FieldsetContext = (props) => props.children(useFieldsetContext.useFieldsetContext());

exports.FieldsetContext = FieldsetContext;
