import { ReactNode } from 'react';
import { UseFloatingPanelContext } from './use-floating-panel-context';
export interface FloatingPanelContextProps {
    children: (context: UseFloatingPanelContext) => ReactNode;
}
export declare const FloatingPanelContext: (props: FloatingPanelContextProps) => ReactNode;
