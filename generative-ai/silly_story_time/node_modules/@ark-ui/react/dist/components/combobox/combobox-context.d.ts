import { ReactNode } from 'react';
import { CollectionItem } from '../collection';
import { UseComboboxContext } from './use-combobox-context';
export interface ComboboxContextProps<T extends CollectionItem> {
    children: (context: UseComboboxContext<T>) => ReactNode;
}
export declare const ComboboxContext: <T extends CollectionItem>(props: ComboboxContextProps<T>) => ReactNode;
