import { ReactNode } from 'react';
import { CollectionItem } from '../collection';
import { UseSelectContext } from './use-select-context';
export interface SelectContextProps<T extends CollectionItem> {
    children: (context: UseSelectContext<T>) => ReactNode;
}
export declare const SelectContext: <T extends CollectionItem>(props: SelectContextProps<T>) => ReactNode;
