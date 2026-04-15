'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [TimePickerColumnPropsProvider, useTimePickerColumnPropsContext] = createContext.createContext({
  name: "TimePickerColumnPropsContext",
  hookName: "useTimePickerColumnPropsContext",
  providerName: "<TimePickerColumnPropsProvider />"
});

exports.TimePickerColumnPropsProvider = TimePickerColumnPropsProvider;
exports.useTimePickerColumnPropsContext = useTimePickerColumnPropsContext;
