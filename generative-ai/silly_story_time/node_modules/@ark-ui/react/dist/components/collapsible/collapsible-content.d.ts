import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CollapsibleContentBaseProps extends PolymorphicProps {
}
export interface CollapsibleContentProps extends HTMLProps<'div'>, CollapsibleContentBaseProps {
}
export declare const CollapsibleContent: ForwardRefExoticComponent<CollapsibleContentProps & RefAttributes<HTMLDivElement>>;
