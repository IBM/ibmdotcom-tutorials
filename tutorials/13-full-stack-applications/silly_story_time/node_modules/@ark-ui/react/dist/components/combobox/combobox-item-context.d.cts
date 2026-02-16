import { ReactNode } from 'react';
import { UseComboboxItemContext } from './use-combobox-item-context';
export interface ComboboxItemContextProps {
    children: (context: UseComboboxItemContext) => ReactNode;
}
export declare const ComboboxItemContext: (props: ComboboxItemContextProps) => ReactNode;
