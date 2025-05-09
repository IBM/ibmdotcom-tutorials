import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface HoverCardArrowBaseProps extends PolymorphicProps {
}
export interface HoverCardArrowProps extends HTMLProps<'div'>, HoverCardArrowBaseProps {
}
export declare const HoverCardArrow: ForwardRefExoticComponent<HoverCardArrowProps & RefAttributes<HTMLDivElement>>;
