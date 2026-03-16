'use client';
import { createContext } from '../../utils/create-context.js';

const [DatePickerViewPropsProvider, useDatePickerViewPropsContext] = createContext({
  name: "DatePickerViewContext",
  hookName: "useDatePickerViewContext",
  providerName: "<DatePickerViewProvider />",
  strict: false,
  defaultValue: { view: "day" }
});

export { DatePickerViewPropsProvider, useDatePickerViewPropsContext };
