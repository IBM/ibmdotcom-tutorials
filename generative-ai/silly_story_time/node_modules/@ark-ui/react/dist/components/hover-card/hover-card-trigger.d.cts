import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface HoverCardTriggerBaseProps extends PolymorphicProps {
}
export interface HoverCardTriggerProps extends HTMLProps<'button'>, HoverCardTriggerBaseProps {
}
export declare const HoverCardTrigger: ForwardRefExoticComponent<HoverCardTriggerProps & RefAttributes<HTMLButtonElement>>;
