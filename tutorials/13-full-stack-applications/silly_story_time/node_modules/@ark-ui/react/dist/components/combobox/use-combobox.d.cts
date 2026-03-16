import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import { CollectionItem, ListCollection } from '../collection';
import * as combobox from '@zag-js/combobox';
export interface UseComboboxProps<T extends CollectionItem> extends Optional<Omit<combobox.Props<T>, 'dir' | 'getRootNode' | 'collection'>, 'id'> {
    /**
     * The collection of items
     */
    collection: ListCollection<T>;
}
export interface UseComboboxReturn<T extends CollectionItem> extends combobox.Api<PropTypes, T> {
}
export declare const useCombobox: <T extends CollectionItem>(props: UseComboboxProps<T>) => UseComboboxReturn<T>;
