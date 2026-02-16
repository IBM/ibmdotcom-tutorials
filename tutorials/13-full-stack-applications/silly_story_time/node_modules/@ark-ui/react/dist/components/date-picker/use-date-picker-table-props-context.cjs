'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [DatePickerTablePropsProvider, useDatePickerTablePropsContext] = createContext.createContext({
  name: "DatePickerTableContext",
  hookName: "useDatePickerTableContext",
  providerName: "<DatePickerTableProvider />"
});

exports.DatePickerTablePropsProvider = DatePickerTablePropsProvider;
exports.useDatePickerTablePropsContext = useDatePickerTablePropsContext;
