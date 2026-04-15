import { JSX } from 'react';
import { CollectionItem } from '../collection';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UsePresenceProps } from '../presence';
import { UseSelectReturn } from './use-select';
interface RootProviderProps<T extends CollectionItem> {
    value: UseSelectReturn<T>;
}
export interface SelectRootProviderBaseProps<T extends CollectionItem> extends RootProviderProps<T>, UsePresenceProps, PolymorphicProps {
}
export interface SelectRootProviderProps<T extends CollectionItem> extends HTMLProps<'div'>, SelectRootProviderBaseProps<T> {
}
export type SelectComponent = <T extends CollectionItem>(props: SelectRootProviderProps<T> & React.RefAttributes<HTMLDivElement>) => JSX.Element;
export declare const SelectRootProvider: SelectComponent;
export {};
