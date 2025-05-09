import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ListboxItemTextBaseProps extends PolymorphicProps {
}
export interface ListboxItemTextProps extends HTMLProps<'div'>, ListboxItemTextBaseProps {
}
export declare const ListboxItemText: ForwardRefExoticComponent<ListboxItemTextProps & RefAttributes<HTMLDivElement>>;
