import { ReactNode } from 'react';
import { UseTabsContext } from './use-tabs-context';
export interface TabsContextProps {
    children: (context: UseTabsContext) => ReactNode;
}
export declare const TabsContext: (props: TabsContextProps) => ReactNode;
