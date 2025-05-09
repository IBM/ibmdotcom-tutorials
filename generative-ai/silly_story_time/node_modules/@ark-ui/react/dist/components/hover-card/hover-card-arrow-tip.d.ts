import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface HoverCardArrowTipBaseProps extends PolymorphicProps {
}
export interface HoverCardArrowTipProps extends HTMLProps<'div'>, HoverCardArrowTipBaseProps {
}
export declare const HoverCardArrowTip: ForwardRefExoticComponent<HoverCardArrowTipProps & RefAttributes<HTMLDivElement>>;
