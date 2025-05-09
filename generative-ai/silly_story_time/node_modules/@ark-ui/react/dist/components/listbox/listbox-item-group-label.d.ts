import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ListboxItemGroupLabelBaseProps extends PolymorphicProps {
}
export interface ListboxItemGroupLabelProps extends HTMLProps<'div'>, ListboxItemGroupLabelBaseProps {
}
export declare const ListboxItemGroupLabel: ForwardRefExoticComponent<ListboxItemGroupLabelProps & RefAttributes<HTMLDivElement>>;
