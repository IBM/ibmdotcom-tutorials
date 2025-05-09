import { ItemState } from '@zag-js/combobox';
import { Provider } from 'react';
export interface UseComboboxItemContext extends ItemState {
}
export declare const ComboboxItemProvider: Provider<UseComboboxItemContext>, useComboboxItemContext: () => UseComboboxItemContext;
