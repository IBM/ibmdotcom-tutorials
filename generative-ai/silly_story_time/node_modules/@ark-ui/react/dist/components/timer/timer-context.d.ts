import { ReactNode } from 'react';
import { UseTimerContext } from './use-timer-context';
export interface TimerContextProps {
    children: (context: UseTimerContext) => ReactNode;
}
export declare const TimerContext: (props: TimerContextProps) => ReactNode;
