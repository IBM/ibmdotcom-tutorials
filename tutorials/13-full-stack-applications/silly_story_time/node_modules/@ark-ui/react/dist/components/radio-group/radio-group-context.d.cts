import { ReactNode } from 'react';
import { UseRadioGroupContext } from './use-radio-group-context';
export interface RadioGroupContextProps {
    children: (context: UseRadioGroupContext) => ReactNode;
}
export declare const RadioGroupContext: (props: RadioGroupContextProps) => ReactNode;
