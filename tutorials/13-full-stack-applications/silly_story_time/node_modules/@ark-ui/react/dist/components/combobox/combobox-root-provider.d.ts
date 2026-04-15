import { JSX, RefAttributes } from 'react';
import { CollectionItem } from '../collection';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UsePresenceProps } from '../presence';
import { UseComboboxReturn } from './use-combobox';
interface RootProviderProps<T extends CollectionItem> {
    value: UseComboboxReturn<T>;
}
export interface ComboboxRootProviderBaseProps<T extends CollectionItem> extends RootProviderProps<T>, UsePresenceProps, PolymorphicProps {
}
export interface ComboboxRootProviderProps<T extends CollectionItem> extends HTMLProps<'div'>, ComboboxRootProviderBaseProps<T> {
}
export type ComboboxComponent = <T extends CollectionItem>(props: ComboboxRootProviderProps<T> & RefAttributes<HTMLDivElement>) => JSX.Element;
export declare const ComboboxRootProvider: ComboboxComponent;
export {};
