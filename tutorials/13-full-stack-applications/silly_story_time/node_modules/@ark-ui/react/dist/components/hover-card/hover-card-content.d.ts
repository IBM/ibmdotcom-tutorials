import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface HoverCardContentBaseProps extends PolymorphicProps {
}
export interface HoverCardContentProps extends HTMLProps<'div'>, HoverCardContentBaseProps {
}
export declare const HoverCardContent: ForwardRefExoticComponent<HoverCardContentProps & RefAttributes<HTMLDivElement>>;
