import { ReactNode } from 'react';
import { UseSwitchContext } from './use-switch-context';
export interface SwitchContextProps {
    children: (context: UseSwitchContext) => ReactNode;
}
export declare const SwitchContext: (props: SwitchContextProps) => ReactNode;
