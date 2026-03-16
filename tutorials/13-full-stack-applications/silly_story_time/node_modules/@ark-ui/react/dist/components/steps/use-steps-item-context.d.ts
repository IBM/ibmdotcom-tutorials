import { ItemState } from '@zag-js/steps';
import { Provider } from 'react';
export interface UseStepsItemContext extends ItemState {
}
export declare const StepsItemProvider: Provider<UseStepsItemContext>, useStepsItemContext: () => UseStepsItemContext;
