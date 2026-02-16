import { ReactNode } from 'react';
import { CollectionItem } from '../collection';
import { UseListboxContext } from './use-listbox-context';
export interface ListboxContextProps<T extends CollectionItem> {
    children: (context: UseListboxContext<T>) => ReactNode;
}
export declare const ListboxContext: <T extends CollectionItem>(props: ListboxContextProps<T>) => ReactNode;
