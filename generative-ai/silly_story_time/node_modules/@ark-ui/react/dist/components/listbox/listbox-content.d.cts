import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ListboxContentBaseProps extends PolymorphicProps {
}
export interface ListboxContentProps extends HTMLProps<'div'>, ListboxContentBaseProps {
}
export declare const ListboxContent: ForwardRefExoticComponent<ListboxContentProps & RefAttributes<HTMLDivElement>>;
