import { ReactNode } from 'react';
import { UseToggleGroupContext } from './use-toggle-group-context';
export interface ToggleGroupContextProps {
    children: (context: UseToggleGroupContext) => ReactNode;
}
export declare const ToggleGroupContext: (props: ToggleGroupContextProps) => ReactNode;
