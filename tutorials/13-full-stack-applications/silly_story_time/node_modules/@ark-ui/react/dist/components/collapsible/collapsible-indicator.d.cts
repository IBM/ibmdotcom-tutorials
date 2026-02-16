import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CollapsibleIndicatorBaseProps extends PolymorphicProps {
}
export interface CollapsibleIndicatorProps extends HTMLProps<'div'>, CollapsibleIndicatorBaseProps {
}
export declare const CollapsibleIndicator: ForwardRefExoticComponent<CollapsibleIndicatorProps & RefAttributes<HTMLDivElement>>;
