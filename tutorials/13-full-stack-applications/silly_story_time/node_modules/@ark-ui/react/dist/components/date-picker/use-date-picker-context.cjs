'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [DatePickerProvider, useDatePickerContext] = createContext.createContext({
  name: "DatePickerContext",
  hookName: "useDatePickerContext",
  providerName: "<DatePickerProvider />"
});

exports.DatePickerProvider = DatePickerProvider;
exports.useDatePickerContext = useDatePickerContext;
