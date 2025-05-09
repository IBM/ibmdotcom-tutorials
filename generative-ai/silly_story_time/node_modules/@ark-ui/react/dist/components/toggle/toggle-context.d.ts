import { ReactNode } from 'react';
import { UseToggleContext } from './use-toggle-context';
export interface ToggleContextProps {
    children: (context: UseToggleContext) => ReactNode;
}
export declare const ToggleContext: (props: ToggleContextProps) => ReactNode;
