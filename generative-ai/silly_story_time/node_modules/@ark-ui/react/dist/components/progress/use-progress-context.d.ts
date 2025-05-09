import { UseProgressReturn } from './use-progress';
import { Provider } from 'react';
export interface UseProgressContext extends UseProgressReturn {
}
export declare const ProgressProvider: Provider<UseProgressContext>, useProgressContext: () => UseProgressContext;
