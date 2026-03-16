import { HTMLProps, PolymorphicProps } from '../factory';
import { UseCollapsibleProps } from './use-collapsible';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CollapsibleRootBaseProps extends UseCollapsibleProps, PolymorphicProps {
}
export interface CollapsibleRootProps extends HTMLProps<'div'>, CollapsibleRootBaseProps {
}
export declare const CollapsibleRoot: ForwardRefExoticComponent<CollapsibleRootProps & RefAttributes<HTMLDivElement>>;
