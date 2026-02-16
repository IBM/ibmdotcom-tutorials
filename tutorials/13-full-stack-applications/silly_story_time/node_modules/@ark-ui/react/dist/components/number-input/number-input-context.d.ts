import { ReactNode } from 'react';
import { UseNumberInputContext } from './use-number-input-context';
export interface NumberInputContextProps {
    children: (context: UseNumberInputContext) => ReactNode;
}
export declare const NumberInputContext: (props: NumberInputContextProps) => ReactNode;
