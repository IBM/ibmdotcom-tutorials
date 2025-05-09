import { ReactNode } from 'react';
import { UseDatePickerContext } from './use-date-picker-context';
export interface DatePickerContextProps {
    children: (context: UseDatePickerContext) => ReactNode;
}
export declare const DatePickerContext: (props: DatePickerContextProps) => ReactNode;
