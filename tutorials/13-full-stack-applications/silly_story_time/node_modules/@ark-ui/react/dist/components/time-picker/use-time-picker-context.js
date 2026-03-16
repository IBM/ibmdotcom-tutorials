'use client';
import { createContext } from '../../utils/create-context.js';

const [TimePickerProvider, useTimePickerContext] = createContext({
  name: "TimePickerContext",
  hookName: "useTimePickerContext",
  providerName: "<TimePickerProvider />"
});

export { TimePickerProvider, useTimePickerContext };
