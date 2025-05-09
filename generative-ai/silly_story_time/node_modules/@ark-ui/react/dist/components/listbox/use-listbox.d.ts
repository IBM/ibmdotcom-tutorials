import { PropTypes } from '@zag-js/react';
import { Optional } from '../../types';
import { CollectionItem, ListCollection } from '../collection';
import * as listbox from '@zag-js/listbox';
export interface UseListboxProps<T extends CollectionItem> extends Optional<Omit<listbox.Props<T>, 'dir' | 'getRootNode' | 'collection'>, 'id'> {
    /**
     * The collection of items
     */
    collection: ListCollection<T>;
}
export interface UseListboxReturn<T extends CollectionItem> extends listbox.Api<PropTypes, T> {
}
export declare const useListbox: <T extends CollectionItem>(props: UseListboxProps<T>) => UseListboxReturn<T>;
