'use client';
import { createContext } from '../../utils/create-context.js';

const [DatePickerTableCellPropsProvider, useDatePickerTableCellPropsContext] = createContext({
  name: "DatePickerTableCellContext",
  hookName: "useDatePickerTableCellContext",
  providerName: "<DatePickerTableCellProvider />"
});

export { DatePickerTableCellPropsProvider, useDatePickerTableCellPropsContext };
