'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [DatePickerViewPropsProvider, useDatePickerViewPropsContext] = createContext.createContext({
  name: "DatePickerViewContext",
  hookName: "useDatePickerViewContext",
  providerName: "<DatePickerViewProvider />",
  strict: false,
  defaultValue: { view: "day" }
});

exports.DatePickerViewPropsProvider = DatePickerViewPropsProvider;
exports.useDatePickerViewPropsContext = useDatePickerViewPropsContext;
