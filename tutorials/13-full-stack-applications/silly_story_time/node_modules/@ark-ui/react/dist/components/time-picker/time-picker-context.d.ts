import { ReactNode } from 'react';
import { UseTimePickerContext } from './use-time-picker-context';
export interface TimePickerContextProps {
    children: (context: UseTimePickerContext) => ReactNode;
}
export declare const TimePickerContext: (props: TimePickerContextProps) => ReactNode;
