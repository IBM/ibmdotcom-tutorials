'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useDatePickerContext = require('./use-date-picker-context.cjs');

const DatePickerContext = (props) => props.children(useDatePickerContext.useDatePickerContext());

exports.DatePickerContext = DatePickerContext;
