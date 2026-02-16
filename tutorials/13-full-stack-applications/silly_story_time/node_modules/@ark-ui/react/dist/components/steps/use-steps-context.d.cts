import { UseStepsReturn } from './use-steps';
import { Provider } from 'react';
export interface UseStepsContext extends UseStepsReturn {
}
export declare const StepsProvider: Provider<UseStepsContext>, useStepsContext: () => UseStepsContext;
