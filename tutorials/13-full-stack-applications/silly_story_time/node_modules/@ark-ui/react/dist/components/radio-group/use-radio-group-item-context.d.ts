import { ItemState } from '@zag-js/radio-group';
import { Provider } from 'react';
export interface UseRadioGroupItemContext extends ItemState {
}
export declare const RadioGroupItemProvider: Provider<UseRadioGroupItemContext>, useRadioGroupItemContext: () => UseRadioGroupItemContext;
