import { JSX } from 'react';
import { CollectionItem } from '../collection';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseListboxReturn } from './use-listbox';
interface RootProviderProps<T extends CollectionItem> {
    value: UseListboxReturn<T>;
}
export interface ListboxRootProviderBaseProps<T extends CollectionItem> extends RootProviderProps<T>, PolymorphicProps {
}
export interface ListboxRootProviderProps<T extends CollectionItem> extends HTMLProps<'div'>, ListboxRootProviderBaseProps<T> {
}
export type ListboxComponent = <T extends CollectionItem>(props: ListboxRootProviderProps<T> & React.RefAttributes<HTMLDivElement>) => JSX.Element;
export declare const ListboxRootProvider: ListboxComponent;
export {};
