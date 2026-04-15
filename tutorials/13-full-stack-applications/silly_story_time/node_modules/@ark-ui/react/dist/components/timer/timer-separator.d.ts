import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TimerSeparatorBaseProps extends PolymorphicProps {
}
export interface TimerSeparatorProps extends HTMLProps<'div'>, TimerSeparatorBaseProps {
}
export declare const TimerSeparator: ForwardRefExoticComponent<TimerSeparatorProps & RefAttributes<HTMLDivElement>>;
