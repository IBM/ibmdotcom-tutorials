'use client';
import { createContext } from '../../utils/create-context.js';

const [DatePickerTablePropsProvider, useDatePickerTablePropsContext] = createContext({
  name: "DatePickerTableContext",
  hookName: "useDatePickerTableContext",
  providerName: "<DatePickerTableProvider />"
});

export { DatePickerTablePropsProvider, useDatePickerTablePropsContext };
