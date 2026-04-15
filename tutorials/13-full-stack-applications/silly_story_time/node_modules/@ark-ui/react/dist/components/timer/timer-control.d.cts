import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TimerControlBaseProps extends PolymorphicProps {
}
export interface TimerControlProps extends HTMLProps<'div'>, TimerControlBaseProps {
}
export declare const TimerControl: ForwardRefExoticComponent<TimerControlProps & RefAttributes<HTMLDivElement>>;
