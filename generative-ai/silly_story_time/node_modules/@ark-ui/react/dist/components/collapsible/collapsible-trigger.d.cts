import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface CollapsibleTriggerBaseProps extends PolymorphicProps {
}
export interface CollapsibleTriggerProps extends HTMLProps<'button'>, CollapsibleTriggerBaseProps {
}
export declare const CollapsibleTrigger: ForwardRefExoticComponent<CollapsibleTriggerProps & RefAttributes<HTMLButtonElement>>;
