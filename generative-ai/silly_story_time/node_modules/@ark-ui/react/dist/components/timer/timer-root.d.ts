import { HTMLProps, PolymorphicProps } from '../factory';
import { UseTimerProps } from './use-timer';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TimerRootBaseProps extends UseTimerProps, PolymorphicProps {
}
export interface TimerRootProps extends HTMLProps<'div'>, TimerRootBaseProps {
}
export declare const TimerRoot: ForwardRefExoticComponent<TimerRootProps & RefAttributes<HTMLDivElement>>;
