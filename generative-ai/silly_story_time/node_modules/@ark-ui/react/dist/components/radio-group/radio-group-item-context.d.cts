import { ReactNode } from 'react';
import { UseRadioGroupItemContext } from './use-radio-group-item-context';
export interface RadioGroupItemContextProps {
    children: (context: UseRadioGroupItemContext) => ReactNode;
}
export declare const RadioGroupItemContext: (props: RadioGroupItemContextProps) => ReactNode;
