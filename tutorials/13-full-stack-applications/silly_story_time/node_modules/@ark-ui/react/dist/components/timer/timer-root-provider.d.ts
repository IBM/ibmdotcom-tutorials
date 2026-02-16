import { HTMLProps, PolymorphicProps } from '../factory';
import { UseTimerReturn } from './use-timer';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
interface RootProviderProps {
    value: UseTimerReturn;
}
export interface TimerRootProviderBaseProps extends RootProviderProps, PolymorphicProps {
}
export interface TimerRootProviderProps extends HTMLProps<'div'>, TimerRootProviderBaseProps {
}
export declare const TimerRootProvider: ForwardRefExoticComponent<TimerRootProviderProps & RefAttributes<HTMLDivElement>>;
export {};
