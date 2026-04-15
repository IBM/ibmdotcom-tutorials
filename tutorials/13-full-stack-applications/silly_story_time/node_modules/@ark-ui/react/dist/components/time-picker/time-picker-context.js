'use client';
import { useTimePickerContext } from './use-time-picker-context.js';

const TimePickerContext = (props) => props.children(useTimePickerContext());

export { TimePickerContext };
