import { ReactNode } from 'react';
import { UseCollapsibleContext } from './use-collapsible-context';
export interface CollapsibleContextProps {
    children: (context: UseCollapsibleContext) => ReactNode;
}
export declare const CollapsibleContext: (props: CollapsibleContextProps) => ReactNode;
