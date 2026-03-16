import { UseTimerReturn } from './use-timer';
import { Provider } from 'react';
export interface UseTimerContext extends UseTimerReturn {
}
export declare const TimerProvider: Provider<UseTimerContext>, useTimerContext: () => UseTimerContext;
