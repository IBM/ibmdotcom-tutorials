import { ActionTriggerProps } from '@zag-js/timer';
import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface TimerActionTriggerBaseProps extends ActionTriggerProps, PolymorphicProps {
}
export interface TimerActionTriggerProps extends HTMLProps<'button'>, TimerActionTriggerBaseProps {
}
export declare const TimerActionTrigger: ForwardRefExoticComponent<TimerActionTriggerProps & RefAttributes<HTMLButtonElement>>;
