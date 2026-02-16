import { JSX } from 'react';
import { Assign } from '../../types';
import { CollectionItem } from '../collection';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UseListboxProps } from './use-listbox';
export interface ListboxRootBaseProps<T extends CollectionItem> extends UseListboxProps<T>, PolymorphicProps {
}
export interface ListboxRootProps<T extends CollectionItem> extends Assign<HTMLProps<'div'>, ListboxRootBaseProps<T>> {
}
export type ListboxComponent = <T extends CollectionItem>(props: ListboxRootProps<T> & React.RefAttributes<HTMLDivElement>) => JSX.Element;
export declare const ListboxRoot: ListboxComponent;
