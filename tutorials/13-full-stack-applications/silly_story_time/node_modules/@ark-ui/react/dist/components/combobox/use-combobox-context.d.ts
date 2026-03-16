import { CollectionItem } from '../collection';
import { UseComboboxReturn } from './use-combobox';
import { Provider } from 'react';
export interface UseComboboxContext<T extends CollectionItem> extends UseComboboxReturn<T> {
}
export declare const ComboboxProvider: Provider<UseComboboxContext<any>>, useComboboxContext: () => UseComboboxContext<any>;
