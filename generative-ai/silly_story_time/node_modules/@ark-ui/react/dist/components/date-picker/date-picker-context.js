'use client';
import { useDatePickerContext } from './use-date-picker-context.js';

const DatePickerContext = (props) => props.children(useDatePickerContext());

export { DatePickerContext };
