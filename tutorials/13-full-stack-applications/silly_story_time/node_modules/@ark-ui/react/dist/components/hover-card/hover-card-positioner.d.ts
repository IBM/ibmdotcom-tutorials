import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface HoverCardPositionerBaseProps extends PolymorphicProps {
}
export interface HoverCardPositionerProps extends HTMLProps<'div'>, HoverCardPositionerBaseProps {
}
export declare const HoverCardPositioner: ForwardRefExoticComponent<HoverCardPositionerProps & RefAttributes<HTMLDivElement>>;
