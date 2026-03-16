import { UseMenuReturn } from './use-menu';
import { Provider } from 'react';
export type UseMenuTriggerItemContext = () => ReturnType<UseMenuReturn['api']['getTriggerItemProps']> | undefined;
export declare const MenuTriggerItemProvider: Provider<UseMenuTriggerItemContext>, useMenuTriggerItemContext: () => UseMenuTriggerItemContext;
