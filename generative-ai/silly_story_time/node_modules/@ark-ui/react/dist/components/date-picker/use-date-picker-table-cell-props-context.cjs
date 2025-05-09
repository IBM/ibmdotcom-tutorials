'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [DatePickerTableCellPropsProvider, useDatePickerTableCellPropsContext] = createContext.createContext({
  name: "DatePickerTableCellContext",
  hookName: "useDatePickerTableCellContext",
  providerName: "<DatePickerTableCellProvider />"
});

exports.DatePickerTableCellPropsProvider = DatePickerTableCellPropsProvider;
exports.useDatePickerTableCellPropsContext = useDatePickerTableCellPropsContext;
