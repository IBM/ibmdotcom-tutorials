import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ListboxItemIndicatorBaseProps extends PolymorphicProps {
}
export interface ListboxItemIndicatorProps extends HTMLProps<'div'>, ListboxItemIndicatorBaseProps {
}
export declare const ListboxItemIndicator: ForwardRefExoticComponent<ListboxItemIndicatorProps & RefAttributes<HTMLDivElement>>;
