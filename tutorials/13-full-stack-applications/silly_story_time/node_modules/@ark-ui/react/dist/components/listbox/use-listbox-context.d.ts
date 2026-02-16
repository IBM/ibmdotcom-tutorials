import { CollectionItem } from '../collection';
import { UseListboxReturn } from './use-listbox';
import { Provider } from 'react';
export interface UseListboxContext<T extends CollectionItem> extends UseListboxReturn<T> {
}
export declare const ListboxProvider: Provider<UseListboxContext<any>>, useListboxContext: () => UseListboxContext<any>;
