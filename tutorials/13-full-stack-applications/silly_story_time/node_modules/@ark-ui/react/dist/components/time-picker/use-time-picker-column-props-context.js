'use client';
import { createContext } from '../../utils/create-context.js';

const [TimePickerColumnPropsProvider, useTimePickerColumnPropsContext] = createContext({
  name: "TimePickerColumnPropsContext",
  hookName: "useTimePickerColumnPropsContext",
  providerName: "<TimePickerColumnPropsProvider />"
});

export { TimePickerColumnPropsProvider, useTimePickerColumnPropsContext };
