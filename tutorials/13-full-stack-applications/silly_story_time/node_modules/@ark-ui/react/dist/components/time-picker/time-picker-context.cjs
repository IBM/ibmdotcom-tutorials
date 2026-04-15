'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useTimePickerContext = require('./use-time-picker-context.cjs');

const TimePickerContext = (props) => props.children(useTimePickerContext.useTimePickerContext());

exports.TimePickerContext = TimePickerContext;
