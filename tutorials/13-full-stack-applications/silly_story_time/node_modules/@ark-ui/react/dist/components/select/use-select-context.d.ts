import { CollectionItem } from '../collection';
import { UseSelectReturn } from './use-select';
import { Provider } from 'react';
export interface UseSelectContext<T extends CollectionItem> extends UseSelectReturn<T> {
}
export declare const SelectProvider: Provider<UseSelectContext<any>>, useSelectContext: () => UseSelectContext<any>;
