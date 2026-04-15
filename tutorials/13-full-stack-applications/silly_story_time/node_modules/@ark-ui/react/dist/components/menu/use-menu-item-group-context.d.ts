import { Provider } from 'react';
export interface ValueChangeDetails {
    value: string;
}
export interface UseMenuItemGroupContext {
    id: string;
    value?: string;
    onValueChange?: (e: ValueChangeDetails) => void;
}
export declare const MenuItemGroupProvider: Provider<UseMenuItemGroupContext>, useMenuItemGroupContext: () => UseMenuItemGroupContext;
