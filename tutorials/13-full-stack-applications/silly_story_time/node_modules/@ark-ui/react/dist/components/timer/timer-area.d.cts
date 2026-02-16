import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TimerAreaBaseProps extends PolymorphicProps {
}
export interface TimerAreaProps extends HTMLProps<'div'>, TimerAreaBaseProps {
}
export declare const TimerArea: ForwardRefExoticComponent<TimerAreaProps & RefAttributes<HTMLDivElement>>;
