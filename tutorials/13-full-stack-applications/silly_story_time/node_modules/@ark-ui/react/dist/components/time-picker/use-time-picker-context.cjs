'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [TimePickerProvider, useTimePickerContext] = createContext.createContext({
  name: "TimePickerContext",
  hookName: "useTimePickerContext",
  providerName: "<TimePickerProvider />"
});

exports.TimePickerProvider = TimePickerProvider;
exports.useTimePickerContext = useTimePickerContext;
