import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ListboxItemGroupBaseProps extends PolymorphicProps {
}
export interface ListboxItemGroupProps extends HTMLProps<'div'>, ListboxItemGroupBaseProps {
}
export declare const ListboxItemGroup: ForwardRefExoticComponent<ListboxItemGroupProps & RefAttributes<HTMLDivElement>>;
