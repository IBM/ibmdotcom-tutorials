import { JSX } from 'react';
import { Assign } from '../../types';
import { CollectionItem } from '../collection';
import { HTMLProps, PolymorphicProps } from '../factory';
import { UsePresenceProps } from '../presence';
import { UseSelectProps } from './use-select';
export interface SelectRootBaseProps<T extends CollectionItem> extends UseSelectProps<T>, UsePresenceProps, PolymorphicProps {
}
export interface SelectRootProps<T extends CollectionItem> extends Assign<HTMLProps<'div'>, SelectRootBaseProps<T>> {
}
export type SelectComponent = <T extends CollectionItem>(props: SelectRootProps<T> & React.RefAttributes<HTMLDivElement>) => JSX.Element;
export declare const SelectRoot: SelectComponent;
