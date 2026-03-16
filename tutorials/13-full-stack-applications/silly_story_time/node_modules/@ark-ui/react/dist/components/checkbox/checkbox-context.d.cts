import { ReactNode } from 'react';
import { UseCheckboxContext } from './use-checkbox-context';
export interface CheckboxContextProps {
    children: (context: UseCheckboxContext) => ReactNode;
}
export declare const CheckboxContext: (props: CheckboxContextProps) => ReactNode;
