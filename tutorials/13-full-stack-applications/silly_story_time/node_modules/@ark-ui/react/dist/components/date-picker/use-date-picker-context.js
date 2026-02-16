'use client';
import { createContext } from '../../utils/create-context.js';

const [DatePickerProvider, useDatePickerContext] = createContext({
  name: "DatePickerContext",
  hookName: "useDatePickerContext",
  providerName: "<DatePickerProvider />"
});

export { DatePickerProvider, useDatePickerContext };
